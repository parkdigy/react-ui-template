import { type TextButtonProps as Props } from './TextButton.types';
import './TextButton.scss';

export const TextButton = ({ className, children, ...props }: Props) => {
  return (
    <BoxButton className={classnames(className, 'TextButton')} {...props}>
      {children}
    </BoxButton>
  );
};

export default TextButton;
