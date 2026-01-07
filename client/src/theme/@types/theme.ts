import { AllSizes, type SizeCssVarNameInfo, type SizeInfo } from './size';
import { AllScreens } from './screen';
import { AllColors, ButtonColors, DefaultColors } from './color';

/********************************************************************************************************************
 * Theme
 * ******************************************************************************************************************/
export interface Theme {
  dark: boolean;
  sizes: Record<AllSizes, SizeInfo>;
  screens: Record<AllScreens, number>;
  colors: Record<AllColors, string>;
  css: {
    names: {
      sizes: Record<AllSizes, string>;
      screens: Record<AllScreens, string>;
      colors: Record<AllColors, string>;
    };
    vars: {
      sizes: Record<AllSizes, SizeCssVarNameInfo>;
      screens: Record<AllScreens, string>;
      colors: Record<AllColors, string>;
    };
  };
  isAllColor: (color: string | undefined) => color is ReadonlyArray<AllColors>[number];
  isDefaultColor: (color: string | undefined) => color is ReadonlyArray<DefaultColors>[number];
  isButtonColor: (color: string | undefined) => color is ReadonlyArray<ButtonColors>[number];
  getColor: (...values: Array<AllColors | string | undefined>) => string | undefined;
  getBackground: (...values: Array<AllColors | string | number | undefined>) => string | number | undefined;
  getSizeValue: (
    sizeValue: keyof SizeInfo,
    ...values: Array<AllSizes | string | number | undefined>
  ) => string | number | undefined;
}

const cssValue = {
  screens: AllScreens.reduce(
    (acc, res) => {
      acc[res] = '';
      return acc;
    },
    {} as Record<AllScreens, string>
  ),
  sizes: AllSizes.reduce(
    (acc, size) => {
      acc[size] = { fontSize: '', lineHeight: '' };
      return acc;
    },
    {} as Record<AllSizes, SizeCssVarNameInfo>
  ),
  colors: AllColors.reduce(
    (acc, color) => {
      acc[color] = '';
      return acc;
    },
    {} as Record<AllColors, string>
  ),
};

export const Theme: Theme = {
  dark: false,
  screens: AllScreens.reduce(
    (acc, res) => {
      acc[res] = 0;
      return acc;
    },
    {} as Record<AllScreens, number>
  ),
  sizes: AllSizes.reduce(
    (acc, size) => {
      acc[size] = { fontSize: 0, lineHeight: 0 };
      return acc;
    },
    {} as Record<AllSizes, SizeInfo>
  ),
  colors: AllColors.reduce(
    (acc, color) => {
      acc[color] = '';
      return acc;
    },
    {} as Record<AllColors, string>
  ),
  css: {
    names: {
      ...copy(cssValue),
      sizes: AllSizes.reduce(
        (acc, size) => {
          acc[size] = '';
          return acc;
        },
        {} as Record<AllSizes, string>
      ),
    },
    vars: copy(cssValue),
  },
  isAllColor: (color): color is ReadonlyArray<AllColors>[number] => false,
  isDefaultColor: (color): color is ReadonlyArray<DefaultColors>[number] => false,
  isButtonColor: (color): color is ReadonlyArray<ButtonColors>[number] => false,
  getColor: () => undefined,
  getBackground: () => undefined,
  getSizeValue: () => undefined,
};
