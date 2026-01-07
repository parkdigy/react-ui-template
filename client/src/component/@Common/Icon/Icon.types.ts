export interface IconProps extends Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
  'fontSize' | 'size'
> {
  size?: number;
  color?: string;
}
