import React from 'react';
import { HoverButtonProps as Props } from './HoverButton.types';
import { HoverContainer } from '../../../Containers';
import FlexButton from '../FlexButton';

export const HoverButton = React.forwardRef<HTMLDivElement, Props>(({ className, children, ...props }, ref) => {
  return (
    <FlexButton ref={ref} className={classnames(className, 'HoverButton')} {...props}>
      <HoverContainer>{children}</HoverContainer>
    </FlexButton>
  );
});

export default HoverButton;
