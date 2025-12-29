import React from 'react';
import { ThemeProviderProps as Props } from './ThemeProvider.types';
import ThemeContext from './ThemeContext';

export const ThemeProvider = ({ children, colorScheme }: Props) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isFirstSet, setIsFirstSet] = useState(true);
  const [finalTheme, setFinalTheme] = useState(Theme);

  /********************************************************************************************************************
   * Changed
   * ******************************************************************************************************************/

  useChanged(() => {
    document.documentElement.setAttribute('data-color-scheme', colorScheme);

    const rootStyle = getComputedStyle(document.documentElement);
    const theme = { ...finalTheme, dark: colorScheme === 'dark' };

    // 컬러 설정
    for (const key of objectKeys(Theme.colors)) {
      const colorName = key as keyof Theme['colors'];
      const cssName = gCss.toCssName(colorName);
      const varName = `--color-${cssName}`;
      if (empty(rootStyle.getPropertyValue(varName))) {
        throw new Error(`CSS variable ${varName} is not defined`);
      }

      theme.colors[colorName] = rootStyle.getPropertyValue(varName);
      theme.css.names.colors[colorName] = cssName;
      theme.css.vars.colors[colorName] = `var(${varName})`;
    }

    if (isFirstSet) {
      setIsFirstSet(false);

      // 사이즈 설정
      for (const key of objectKeys(Theme.sizes)) {
        const sizeName = key as keyof Theme['sizes'];
        const cssName = gCss.toCssName(sizeName);
        const baseVarName = `--size-${cssName}`;
        const fontSizeVarName = `${baseVarName}-font-size`;
        const lineHeightVarName = `${baseVarName}-line-height`;
        if (empty(rootStyle.getPropertyValue(fontSizeVarName))) {
          throw new Error(`CSS variable ${fontSizeVarName} is not defined`);
        }
        if (empty(rootStyle.getPropertyValue(lineHeightVarName))) {
          throw new Error(`CSS variable ${lineHeightVarName} is not defined`);
        }

        const sizes = theme.sizes[sizeName]!;
        sizes.fontSize = Number(rootStyle.getPropertyValue(fontSizeVarName).replace('px', ''));
        sizes.lineHeight = Number(rootStyle.getPropertyValue(lineHeightVarName));

        theme.css.names.sizes[sizeName] = cssName;

        const cssVarSizes = theme.css.vars.sizes[sizeName];
        cssVarSizes.fontSize = `var(${fontSizeVarName})`;
        cssVarSizes.lineHeight = `var(${lineHeightVarName})`;
      }

      // 화면 크기 설정
      for (const key of objectKeys(Theme.screens)) {
        const screenName = key as keyof Theme['screens'];
        const cssName = gCss.toCssName(screenName);
        const varName = `--screen-${cssName}`;
        if (empty(rootStyle.getPropertyValue(varName))) {
          throw new Error(`CSS variable ${varName} is not defined`);
        }
        theme.screens[screenName] = Number(rootStyle.getPropertyValue(varName).replace('px', ''));
        theme.css.names.screens[screenName] = cssName;
        theme.css.vars.screens[screenName] = `var(${varName})`;
      }
    }

    setFinalTheme(theme);

    gTheme.setTheme(theme);
  }, [colorScheme]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <ThemeContext.Provider value={finalTheme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
