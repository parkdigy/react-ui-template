import { type ImgHTMLProps, type ImgProps as Props } from './Img.types';
import { CustomComponent } from '../../../CustomComponent';
import './Img.scss';

export const Img = ({ className, rotate, ...props }: Props) => {
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <CustomComponent<ImgHTMLProps>
      component='img'
      className={classnames(className, 'Img')}
      transform={rotate ? `rotate(${rotate}deg)` : undefined}
      {...props}
    />
  );
};

export default Img;
