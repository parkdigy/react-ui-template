import React from 'react';
import { HoverContainerProps as Props } from './HoverContainer.types';

export const HoverContainer = ({ className, ...props }: Props) => {
  return <Box className={classnames(className, 'HoverContainer')} {...props} />;
};

export default HoverContainer;
