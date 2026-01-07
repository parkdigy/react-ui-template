import { MainRouter } from '../../router';
import { useAppState } from '@context';
import { ErrorBoundary, Footer, Header } from '@comp';
import './DefaultLayout.scss';

const DefaultLayout = () => {
  const { removeHtmlLoading } = useAppState();

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    removeHtmlLoading();
  }, [removeHtmlLoading]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div className='DefaultLayout'>
      <Header layout='default' />
      <div className='DefaultLayout-content-container'>
        <ErrorBoundary>
          <MainRouter />
        </ErrorBoundary>
      </div>

      <Footer layout='default' />
    </div>
  );
};

export default DefaultLayout;
