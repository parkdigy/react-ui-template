import { type TinyMCEViewerProps as Props } from './TinyMCEViewer.types';
import './TinyMCEViewer.scss';

export const TinyMCEViewer = ({ children }: Props) => {
  return (
    <div className='TinyMCEViewer'>
      <div dangerouslySetInnerHTML={{ __html: children }} />
    </div>
  );
};

export default TinyMCEViewer;
