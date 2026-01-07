import { ThemeProviderProps as Props } from './ThemeProvider.types';
import ThemeContext from './ThemeContext';
import { AllColors, AllSizes, ButtonColors, DefaultColors, SizeInfo } from '../@types';

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

    theme.isAllColor = (color): color is ReadonlyArray<AllColors>[number] =>
      color && !color.startsWith('#') ? contains(AllColors, color) : false;

    theme.isDefaultColor = (color): color is ReadonlyArray<DefaultColors>[number] =>
      color && !color.startsWith('#') ? contains(DefaultColors, color) : false;

    theme.isButtonColor = (color): color is ReadonlyArray<ButtonColors>[number] =>
      color && !color.startsWith('#') ? contains(ButtonColors, color) : false;

    theme.getColor = (...values) => themeGetColor(theme, ...values);

    theme.getBackground = (...values) => themGetBackground(theme, ...values);

    theme.getSizeValue = (sizeValue, ...values) => themeGetSizeValue(theme, sizeValue, ...values);

    setFinalTheme(theme);

    gTheme.setTheme(theme);
  }, [colorScheme]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <ThemeContext.Provider value={finalTheme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

/********************************************************************************************************************
 * themeGetColor
 * ******************************************************************************************************************/

const themeGetColor = (theme: Theme, ...values: Array<AllColors | string | undefined>) => {
  for (const value of values) {
    if (value !== undefined) {
      if (!value.startsWith('#') && contains(AllColors, value)) {
        return theme.colors[value as AllColors];
      }
      return value;
    }
  }
};

/********************************************************************************************************************
 * themeGetBackground
 * ******************************************************************************************************************/
const themGetBackground = (theme: Theme, ...values: Array<AllColors | string | number | undefined>) => {
  for (const value of values) {
    if (value !== undefined) {
      if (typeof value === 'string' && !value.startsWith('#') && contains(AllColors, value)) {
        return theme.colors[value as AllColors];
      }
      return value;
    }
  }
};

/********************************************************************************************************************
 * themeGetSize
 * ******************************************************************************************************************/
const themeGetSizeValue = (
  theme: Theme,
  sizeValue: keyof SizeInfo,
  ...values: Array<AllSizes | string | number | undefined>
) => {
  for (const value of values) {
    if (value !== undefined) {
      if (typeof value === 'string' && contains(AllSizes, value)) {
        return theme.sizes[value as AllSizes][sizeValue];
      }
      return value;
    }
  }
};
