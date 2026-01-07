export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<HTMLButtonElement>;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info' | 'light' | 'gray';
  fullWidth?: boolean;
  size?: 'small' | 'medium';
}
