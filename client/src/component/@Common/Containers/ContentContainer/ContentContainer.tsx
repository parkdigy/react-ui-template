import React from 'react';
import { ContentContainerProps as Props } from './ContentContainer.types';
import './ContentContainer.scss';

export const ContentContainer = ({ className, children, containerProps, ...props }: Props) => {
  return (
    <Flex className='ContentContainer' center {...containerProps}>
      <Flex className={classnames(className, 'ContentContainer__Content')} {...props}>
        {children}
      </Flex>
    </Flex>
  );
};

export default ContentContainer;
