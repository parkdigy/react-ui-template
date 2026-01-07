import { type DivProps as Props } from './Div.types';

export const Div = ({ center, textAlign, ...props }: Props) => {
  return <Box display='block' textAlign={ifUndefined(textAlign, center ? 'center' : undefined)} {...props} />;
};

export default Div;
