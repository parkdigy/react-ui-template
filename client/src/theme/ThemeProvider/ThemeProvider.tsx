import React from 'react';
import { ThemeProviderProps as Props } from './ThemeProvider.types';
import { Theme } from '../@types';
import ThemeContext from './ThemeContext';

export const ThemeProvider = ({ children, colorScheme }: Props) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isFirstSet, setIsFirstSet] = useState(true);
  const [lastTheme, setLastTheme] = useState(Theme);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  let theme = lastTheme;
  if (useChanged(colorScheme, true)) {
    document.documentElement.setAttribute('data-color-scheme', colorScheme);

    const rootStyle = getComputedStyle(document.documentElement);
    const newTheme = { ...lastTheme, dark: colorScheme === 'dark' };

    // 컬러 설정
    for (const key of objectKeys(Theme.colors)) {
      const colorName = key as keyof Theme['colors'];
      const cssName = util.css.toCssName(colorName);
      const varName = `--color-${cssName}`;
      if (empty(rootStyle.getPropertyValue(varName))) {
        throw new Error(`CSS variable ${varName} is not defined`);
      }

      newTheme.colors[colorName] = rootStyle.getPropertyValue(varName);
      newTheme.css.names.colors[colorName] = cssName;
      newTheme.css.vars.colors[colorName] = `var(${varName})`;
    }

    if (isFirstSet) {
      setIsFirstSet(false);

      // 사이즈 설정
      for (const key of objectKeys(Theme.sizes)) {
        const sizeName = key as keyof Theme['sizes'];
        const cssName = util.css.toCssName(sizeName);
        const baseVarName = `--size-${cssName}`;
        const fontSizeVarName = `${baseVarName}-font-size`;
        const lineHeightVarName = `${baseVarName}-line-height`;
        if (empty(rootStyle.getPropertyValue(fontSizeVarName))) {
          throw new Error(`CSS variable ${fontSizeVarName} is not defined`);
        }
        if (empty(rootStyle.getPropertyValue(lineHeightVarName))) {
          throw new Error(`CSS variable ${lineHeightVarName} is not defined`);
        }

        const sizes = newTheme.sizes[sizeName]!;
        sizes.fontSize = Number(rootStyle.getPropertyValue(fontSizeVarName).replace('px', ''));
        sizes.lineHeight = Number(rootStyle.getPropertyValue(lineHeightVarName));

        newTheme.css.names.sizes[sizeName] = cssName;

        const cssVarSizes = newTheme.css.vars.sizes[sizeName];
        cssVarSizes.fontSize = `var(${fontSizeVarName})`;
        cssVarSizes.lineHeight = `var(${lineHeightVarName})`;
      }

      // 화면 크기 설정
      for (const key of objectKeys(Theme.screens)) {
        const screenName = key as keyof Theme['screens'];
        const cssName = util.css.toCssName(screenName);
        const varName = `--screen-${cssName}`;
        if (empty(rootStyle.getPropertyValue(varName))) {
          throw new Error(`CSS variable ${varName} is not defined`);
        }
        newTheme.screens[screenName] = Number(rootStyle.getPropertyValue(varName).replace('px', ''));
        newTheme.css.names.screens[screenName] = cssName;
        newTheme.css.vars.screens[screenName] = `var(${varName})`;
      }
    }

    setLastTheme(newTheme);

    app.setTheme(newTheme);

    theme = newTheme;
  }

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
