import { AuthRouter } from '../../router';
import { ErrorBoundary, Footer, Header } from '@comp';
import './AuthLayout.scss';

interface Props {}

export const AuthLayout = ({}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { removeHtmlLoading } = useAppState();

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEventEffect(() => {
    removeHtmlLoading();
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div className='AuthLayout'>
      <Header layout='auth' />
      <div className='AuthLayout-content-container'>
        <ErrorBoundary>
          <AuthRouter />
        </ErrorBoundary>
      </div>
      <Footer layout='auth' />
    </div>
  );
};

export default AuthLayout;
