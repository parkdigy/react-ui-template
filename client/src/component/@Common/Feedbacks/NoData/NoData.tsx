import React from 'react';
import { NoDataProps as Props } from './NoData.types';

export const NoData = ({ message, ...props }: Props) => {
  return (
    <Flex centerCenter gap={20} pv={100} {...props}>
      <Icon size={40} c='textBlurry'>
        Description
      </Icon>
      {message === undefined || typeof message === 'string' ? (
        <TBlurry fw={500} center whiteSpace='pre-wrap'>
          {ifEmpty(message, '표시할 정보가 없습니다.')}
        </TBlurry>
      ) : (
        message
      )}
    </Flex>
  );
};

export default NoData;
