import { type PageRootContainerProps as Props } from './PageRootContainer.types';
import { ContentContainer } from '../ContentContainer';

export const PageRootContainer = ({ className, fullScreen, flex, containerProps, ...props }: Props) => {
  return (
    <ContentContainer
      className={classnames(className, 'PageRootContainer')}
      pv={20}
      flex={fullScreen ? 1 : flex}
      containerProps={fullScreen ? { ...containerProps, flex: 1 } : containerProps}
      {...props}
    />
  );
};

export default PageRootContainer;
