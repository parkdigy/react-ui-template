import { type HoverButtonProps as Props } from './HoverButton.types';
import { HoverContainer } from '../../../Containers';
import FlexButton from '../FlexButton';

export const HoverButton = ({ className, children, ...props }: Props) => {
  return (
    <HoverContainer>
      <FlexButton className={classnames(className, 'HoverButton')} {...props}>
        {children}
      </FlexButton>
    </HoverContainer>
  );
};

export default HoverButton;
