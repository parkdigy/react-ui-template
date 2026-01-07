import { type ListProps as Props } from './List.types';
import ListTitle from './ListTitle';
import ListItem from './ListItem';
import './List.scss';

export const List = ({
  type = 'info',
  variant = 'default',
  c: initC,
  color: initColor,
  items,
  gap = 2,
  title,
  bulletColor = 'opacity30',
  ...boxProps
}: Props) => {
  const color = ifUndefined(ifUndefined(initColor, initC), 'textLighten');

  return (
    <Box color={color} className={classnames('List', `List-variant-${variant}`)} {...boxProps}>
      {title && <ListTitle type={type} content={title} />}
      <div className='List__Items' style={{ '--gap': `${gap}px` } as React.CSSProperties}>
        {items.map((item, idx) => (
          <ListItem key={idx} content={item} bulletColor={bulletColor} />
        ))}
      </div>
    </Box>
  );
};

export default List;
