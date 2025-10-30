import React from 'react';
import { HoverButtonProps as Props } from './HoverButton.types';
import { HoverContainer } from '../../../Containers';

export const HoverButton = React.forwardRef<HTMLDivElement, Props>(({ className, children, ...props }, ref) => {
  return (
    <BoxButton ref={ref} className={classnames(className, 'HoverButton')} {...props}>
      <HoverContainer>{children}</HoverContainer>
    </BoxButton>
  );
});

export default HoverButton;
