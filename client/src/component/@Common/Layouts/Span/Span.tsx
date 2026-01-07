import { type SpanProps as Props } from './Span.types';

export const Span = (props: Props) => {
  return <Box display='inline-block' {...props} />;
};

export default Span;
