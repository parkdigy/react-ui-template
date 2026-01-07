import { type FlexProps as Props } from './Flex.types';

export const Flex = ({ row, flexDirection, ...props }: Props) => {
  return <Box display='flex' flexDirection={ifUndefined(flexDirection, row ? 'row' : 'column')} {...props} />;
};

export default Flex;
