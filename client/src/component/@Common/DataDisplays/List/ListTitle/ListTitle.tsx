import { type ListTitleProps as Props } from './ListTitle.types';
import './ListTitle.scss';
import IconInfo from './icon_info.svg';

const ListTitle = ({ type, content }: Props) => {
  return (
    <div className='ListTitle'>
      {type === 'info' && (
        <div className='ListTitle__IconWrapper'>
          <Svg src={IconInfo} w={14} h={14} c='textLighten' />
        </div>
      )}
      {content}
    </div>
  );
};

export default ListTitle;
