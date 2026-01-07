import {
  type Dev_FormControl_AlertTypeProps,
  type Dev_FormControl_BackgroundColorProps,
  type Dev_FormControl_ButtonSizeProps,
  type Dev_FormControl_ButtonVariantProps,
  type Dev_FormControl_ChipVariantProps,
  type Dev_FormControl_ClearableProps,
  type Dev_FormControl_ColorProps,
  type Dev_FormControl_CurrentPageProps,
  type Dev_FormControl_DisabledProps,
  type Dev_FormControl_FontWeightProps,
  type Dev_FormControl_FormCheckboxTypeProps,
  type Dev_FormControl_FormRadioGroupTypeProps,
  type Dev_FormControl_FormSelectSizeProps,
  type Dev_FormControl_HelperTextProps,
  type Dev_FormControl_HideTitleProps,
  type Dev_FormControl_IconButtonVariantProps,
  type Dev_FormControl_IconPositionProps,
  type Dev_FormControl_IconProps,
  type Dev_FormControl_IconGapProps,
  type Dev_FormControl_LastPageProps,
  type Dev_FormControl_ListTypeProps,
  type Dev_FormControl_ListVariantProps,
  type Dev_FormControl_LoadingProps,
  type Dev_FormControl_MessageProps,
  type Dev_FormControl_OnClickProps,
  type Dev_FormControl_OnRemoveClickProps,
  type Dev_FormControl_OnRetryProps,
  type Dev_FormControl_PlaceholderProps,
  type Dev_FormControl_RequiredProps,
  type Dev_FormControl_ReverseProps,
  type Dev_FormControl_RotateProps,
  type Dev_FormControl_RowsProps,
  type Dev_FormControl_RulesProps,
  type Dev_FormControl_ShowIconProps,
  type Dev_FormControl_SizeProps,
  type Dev_FormControl_GapProps,
  type Dev_FormControl_SubControlProps,
  type Dev_FormControl_TitleProps,
  type Dev_FormControl_TooltipPlaceProps,
  type Dev_FormControl_UrlProps,
  type Dev_FormControl_AcceptProps,
} from '../FormControls';
import { type Dev_CodeProps } from '../Code';
import { AllColors } from '@theme';
import { type FormControlCommonProps, type FormProps, type GridProps } from '@ccomp';
import { type Dev_FormControl_LabelProps } from '../FormControls/Label';
import { type Dev_FormControl_SearchableProps } from '../FormControls/Searchable';

export type Dev_FormOptionsOption =
  /** Multi Option Controls */
  | 'buttonVariant'
  | 'buttonSize'
  | 'iconButtonVariant'
  | 'alertType'
  | 'color'
  | 'backgroundColor'
  | 'fontWeight'
  | 'tooltipPlace'
  | 'rotate'
  | 'icon'
  | 'iconPosition'
  | 'iconGap'
  | 'size'
  | 'gap'
  | 'rows'
  | 'formCheckboxType'
  | 'formRadioGroupType'
  | 'formSelectSize'
  | 'currentPage'
  | 'lastPage'
  | 'listType'
  | 'listVariant'
  | 'chipVariant'
  /** Text Controls */
  | 'url'
  | 'title'
  | 'message'
  | 'placeholder'
  | 'helperText'
  | 'label'
  | 'accept'
  /** Boolean Controls */
  | 'disabled'
  | 'loading'
  | 'reverse'
  | 'required'
  | 'showIcon'
  | 'hideTitle'
  | 'onRetry'
  | 'subControl'
  | 'rules'
  | 'clearable'
  | 'searchable'
  | 'onClick'
  | 'onRemoveClick'
  /** Cols Controls */
  | 'cols';

export type Dev_FormOptionsRadioGroupOption =
  | 'buttonVariant'
  | 'buttonSize'
  | 'iconButtonVariant'
  | 'alertType'
  | 'color'
  | 'backgroundColor'
  | 'fontWeight'
  | 'tooltipPlace'
  | 'rotate'
  | 'icon'
  | 'iconPosition'
  | 'iconGap'
  | 'size'
  | 'gap'
  | 'rows'
  | 'formCheckboxType'
  | 'formRadioGroupType'
  | 'formSelectSize'
  | 'currentPage'
  | 'lastPage'
  | 'listType'
  | 'listVariant'
  | 'chipVariant';

export interface Dev_FormOptionsData<
  TColors extends AllColors = AllColors,
  TBackgroundColors extends AllColors = AllColors,
> {
  /** Multi Option Controls */
  buttonVariant?: Dev_FormControl_ButtonVariantProps['value'];
  buttonSize?: Dev_FormControl_ButtonSizeProps['value'];
  iconButtonVariant?: Dev_FormControl_IconButtonVariantProps['value'];
  alertType?: Dev_FormControl_AlertTypeProps['value'];
  color?: TColors;
  backgroundColor?: TBackgroundColors;
  size?: Dev_FormControl_SizeProps['value'];
  fontWeight?: Dev_FormControl_FontWeightProps['value'];
  tooltipPlace?: Dev_FormControl_TooltipPlaceProps['value'];
  rotate?: Dev_FormControl_RotateProps['value'];
  gap?: Dev_FormControl_GapProps['value'];
  icon?: Dev_FormControl_IconProps['value'];
  iconPosition?: Dev_FormControl_IconPositionProps['value'];
  iconGap?: Dev_FormControl_IconGapProps['value'];
  rows?: Dev_FormControl_RowsProps['value'];
  formCheckboxType?: Dev_FormControl_FormCheckboxTypeProps['value'];
  formRadioGroupType?: Dev_FormControl_FormRadioGroupTypeProps['value'];
  formSelectSize?: Dev_FormControl_FormSelectSizeProps['value'];
  currentPage?: Dev_FormControl_CurrentPageProps['value'];
  lastPage?: Dev_FormControl_LastPageProps['value'];
  listType?: Dev_FormControl_ListTypeProps['value'];
  listVariant?: Dev_FormControl_ListVariantProps['value'];
  chipVariant?: Dev_FormControl_ChipVariantProps['value'];
  /** Text Controls */
  url?: Dev_FormControl_UrlProps['value'];
  title?: Dev_FormControl_TitleProps['value'];
  placeholder?: Dev_FormControl_PlaceholderProps['value'];
  message?: Dev_FormControl_MessageProps['value'];
  helperText?: Dev_FormControl_HelperTextProps['value'];
  label?: Dev_FormControl_LabelProps['value'];
  accept?: Dev_FormControl_AcceptProps['value'];
  /** Boolean Controls */
  loading?: Dev_FormControl_LoadingProps['value'];
  disabled?: Dev_FormControl_DisabledProps['value'];
  reverse?: Dev_FormControl_ReverseProps['value'];
  required?: Dev_FormControl_RequiredProps['value'];
  showIcon?: Dev_FormControl_ShowIconProps['value'];
  hideTitle?: Dev_FormControl_HideTitleProps['value'];
  onRetry?: Dev_FormControl_OnRetryProps['value'];
  subControl?: Dev_FormControl_SubControlProps['value'];
  rules?: Dev_FormControl_RulesProps['value'];
  clearable?: Dev_FormControl_ClearableProps['value'];
  searchable?: Dev_FormControl_SearchableProps['value'];
  onClick?: Dev_FormControl_OnClickProps['value'];
  onRemoveClick?: Dev_FormControl_OnRemoveClickProps['value'];
  /** Cols Controls */
  cols?: GridProps['cols'];
}

export interface Dev_FormOptionsControlCommonProps extends Pick<
  FormControlCommonProps<any>,
  'disabled' | 'helperText'
> {}

export interface Dev_FormOptionsControlPropsMap {
  /** Multi Option Controls */
  alertType?: Pick<Dev_FormControl_AlertTypeProps, keyof Dev_FormOptionsControlCommonProps>;
  backgroundColor?: Pick<
    Dev_FormControl_BackgroundColorProps,
    keyof Dev_FormOptionsControlCommonProps | 'useCustomColor'
  >;
  buttonVariant?: Pick<Dev_FormControl_ButtonVariantProps, keyof Dev_FormOptionsControlCommonProps>;
  buttonSize?: Pick<Dev_FormControl_ButtonSizeProps, keyof Dev_FormOptionsControlCommonProps>;
  color?: Pick<Dev_FormControl_ColorProps, keyof Dev_FormOptionsControlCommonProps | 'useCustomColor'>;
  fontWeight?: Pick<Dev_FormControl_FontWeightProps, keyof Dev_FormOptionsControlCommonProps>;
  tooltipPlace?: Pick<Dev_FormControl_TooltipPlaceProps, keyof Dev_FormOptionsControlCommonProps>;
  icon?: Pick<Dev_FormControl_IconProps, keyof Dev_FormOptionsControlCommonProps>;
  iconPosition?: Pick<Dev_FormControl_IconPositionProps, keyof Dev_FormOptionsControlCommonProps>;
  iconGap?: Pick<Dev_FormControl_IconGapProps, keyof Dev_FormOptionsControlCommonProps>;
  iconButtonVariant?: Pick<Dev_FormControl_IconButtonVariantProps, keyof Dev_FormOptionsControlCommonProps>;
  rotate?: Pick<Dev_FormControl_RotateProps, keyof Dev_FormOptionsControlCommonProps>;
  size?: Pick<Dev_FormControl_SizeProps, keyof Dev_FormOptionsControlCommonProps>;
  gap?: Pick<Dev_FormControl_GapProps, keyof Dev_FormOptionsControlCommonProps>;
  rows?: Pick<Dev_FormControl_RowsProps, keyof Dev_FormOptionsControlCommonProps>;
  formCheckboxType?: Pick<Dev_FormControl_FormCheckboxTypeProps, keyof Dev_FormOptionsControlCommonProps>;
  formRadioGroupType?: Pick<Dev_FormControl_FormRadioGroupTypeProps, keyof Dev_FormOptionsControlCommonProps>;
  formSelectSize?: Pick<Dev_FormControl_FormSelectSizeProps, keyof Dev_FormOptionsControlCommonProps>;
  currentPage?: Pick<Dev_FormControl_CurrentPageProps, keyof Dev_FormOptionsControlCommonProps>;
  lastPage?: Pick<Dev_FormControl_LastPageProps, keyof Dev_FormOptionsControlCommonProps>;
  listType?: Pick<Dev_FormControl_ListTypeProps, keyof Dev_FormOptionsControlCommonProps>;
  listVariant?: Pick<Dev_FormControl_ListVariantProps, keyof Dev_FormOptionsControlCommonProps>;
  chipVariant?: Pick<Dev_FormControl_ChipVariantProps, keyof Dev_FormOptionsControlCommonProps>;
  /** Text Controls */
  title?: Pick<Dev_FormControl_TitleProps, keyof Dev_FormOptionsControlCommonProps>;
  placeholder?: Pick<Dev_FormControl_PlaceholderProps, keyof Dev_FormOptionsControlCommonProps>;
  url?: Pick<Dev_FormControl_UrlProps, keyof Dev_FormOptionsControlCommonProps>;
  message?: Pick<Dev_FormControl_MessageProps, keyof Dev_FormOptionsControlCommonProps>;
  helperText?: Pick<Dev_FormControl_HelperTextProps, keyof Dev_FormOptionsControlCommonProps>;
  label?: Pick<Dev_FormControl_LabelProps, keyof Dev_FormOptionsControlCommonProps>;
  accept?: Pick<Dev_FormControl_AcceptProps, keyof Dev_FormOptionsControlCommonProps>;
  /** Boolean Controls */
  loading?: Pick<Dev_FormControl_LoadingProps, keyof Dev_FormOptionsControlCommonProps>;
  disabled?: Pick<Dev_FormControl_DisabledProps, keyof Dev_FormOptionsControlCommonProps>;
  reverse?: Pick<Dev_FormControl_ReverseProps, keyof Dev_FormOptionsControlCommonProps>;
  required?: Pick<Dev_FormControl_RequiredProps, keyof Dev_FormOptionsControlCommonProps>;
  showIcon?: Pick<Dev_FormControl_ShowIconProps, keyof Dev_FormOptionsControlCommonProps>;
  hideTitle?: Pick<Dev_FormControl_HideTitleProps, keyof Dev_FormOptionsControlCommonProps>;
  onRetry?: Pick<Dev_FormControl_OnRetryProps, keyof Dev_FormOptionsControlCommonProps>;
  subControl?: Pick<Dev_FormControl_SubControlProps, keyof Dev_FormOptionsControlCommonProps>;
  rules?: Pick<Dev_FormControl_RulesProps, keyof Dev_FormOptionsControlCommonProps>;
  clearable?: Pick<Dev_FormControl_ClearableProps, keyof Dev_FormOptionsControlCommonProps>;
  searchable?: Pick<Dev_FormControl_SearchableProps, keyof Dev_FormOptionsControlCommonProps>;
  onClick?: Pick<Dev_FormControl_OnClickProps, keyof Dev_FormOptionsControlCommonProps>;
  onRemoveClick?: Pick<Dev_FormControl_OnRemoveClickProps, keyof Dev_FormOptionsControlCommonProps>;
}

export interface Dev_FormOptionsProps<
  TColors extends AllColors = AllColors,
  TBackgroundColors extends AllColors = AllColors,
> {
  options: readonly (
    | Dev_FormOptionsOption
    | readonly (Dev_FormOptionsOption | { option: Dev_FormOptionsOption; cols: number } | null)[]
    | '|'
  )[];
  optionProps?: Dev_FormOptionsControlPropsMap;
  disabledOptions?: readonly (Dev_FormOptionsOption | false | null | undefined)[];
  selectControlOptions?: readonly (Dev_FormOptionsRadioGroupOption | false | null | undefined)[];
  multiOptionControlType?: 'select' | 'radio';
  formProps?: Omit<FormProps, 'children' | 'className'>;
  testPosition?: 'top' | 'bottom';
  colors?: readonly TColors[];
  useCustomColor?: boolean;
  backgroundColors?: readonly TBackgroundColors[];
  useCustomBackgroundColor?: boolean;
  code: Dev_CodeProps['children'];
  codePropsMap: Dev_CodeProps['propsMap'];
  gridCols?: GridProps['cols'];
  defaultData?: Partial<Dev_FormOptionsData<TColors, TBackgroundColors>>;
  testBackgroundColor?: AllColors | CSSProperties['backgroundColor'];
  onChange: (data: Dev_FormOptionsData<TColors, TBackgroundColors>) => void;
  onGetTest: (data: Dev_FormOptionsData<TColors, TBackgroundColors>) => ReactNode;
}
