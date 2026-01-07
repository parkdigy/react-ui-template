import React from 'react';
import { type CustomComponentProps, CustomComponentAllStyles } from '../../CustomComponent';

export interface BoxStyleProps extends CustomComponentAllStyles {}

export type BoxHtmlProps<E extends HTMLDivElement | HTMLSpanElement = HTMLDivElement> = React.DetailedHTMLProps<
  React.HTMLAttributes<E>,
  E
>;

export type BoxComponent = 'div' | 'span' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer' | 'nav';

export interface BoxProps<
  C extends BoxComponent = 'div',
  E extends HTMLDivElement | HTMLSpanElement = C extends 'span' ? HTMLSpanElement : HTMLDivElement,
>
  extends Omit<CustomComponentProps<BoxHtmlProps<E>>, 'wrap' | keyof BoxStyleProps>, BoxStyleProps {
  ref?: Ref<E>;
  component?: C;
  center?: boolean;
  nowrap?: boolean;
  absolute?: boolean;
  relative?: boolean;
  fixed?: boolean;
  underline?: boolean;
  hoverStyle?: BoxStyleProps;
  activeStyle?: BoxStyleProps;
}
