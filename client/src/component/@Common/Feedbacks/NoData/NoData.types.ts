export interface NoDataProps extends Omit<FlexProps, 'ref' | 'children' | 'gap'> {
  message?: string | ReactNode;
}
