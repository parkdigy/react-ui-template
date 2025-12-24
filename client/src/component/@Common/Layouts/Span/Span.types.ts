export interface SpanProps extends Omit<BoxProps, 'ref' | 'component'> {
  ref?: Ref<HTMLSpanElement>;
}
