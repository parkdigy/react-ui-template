import React from 'react';
import { DividerProps as Props } from './Divider.types';
import './Divider.scss';

export const Divider = ({ className, vertical, c, color, w, width, h, height, ...props }: Props) => {
  return vertical ? (
    <Span
      className={classnames(className, 'Divider Divider-v')}
      h={h}
      height={height}
      borderLeftColor={ifUndefined(color, c)}
      borderLeftWidth={ifUndefined(width, w)}
      {...props}
    />
  ) : (
    <Box
      className={classnames(className, 'Divider Divider-h')}
      w={w}
      width={width}
      borderTopColor={ifUndefined(color, c)}
      borderTopWidth={ifUndefined(height, h)}
      {...props}
    />
  );
};

export default Divider;
