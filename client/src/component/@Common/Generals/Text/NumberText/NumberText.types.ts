export interface NumberTextProps extends Omit<TProps, 'children' | 'prefix'> {
  value?: number | string;
  children?: number | string;
  prefix?: string;
  prefixProps?: Omit<TProps, 'children'>;
  suffix?: string;
  suffixProps?: Omit<TProps, 'children'>;
}
