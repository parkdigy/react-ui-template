import React from 'react';
import { ApiLoadContainerCommands, ApiLoadContainerProps as Props } from './ApiLoadContainer.types';
import { useForwardRef, useTimeoutRef } from '@pdg/react-hook';
import ErrorRetry from '../../Errors/ErrorRetry';

export const ApiLoadContainer = <T = any, TApiData = any>({
  ref,
  children,
  load,
  data,
  retryDelay = 1000,
  onLoad,
  ...props
}: Props<T, TApiData>) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const isLoadingRef = useRef(false);
  const isShowLoadingRef = useRef(false);

  /********************************************************************************************************************
   * Timeout
   * ******************************************************************************************************************/

  const [, setLoadTimeout] = useTimeoutRef();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [loadStatus, setLoadStatus] = useState<'loading' | 'success' | 'error' | 'empty_error'>('loading');
  const [error, setError] = useState<any>();
  const [apiData, setApiData] = useState<TApiData>();

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const doLoad = useCallback(
    (retry: boolean) => {
      if (isLoadingRef.current) return;
      isLoadingRef.current = true;

      g.loading.show();
      isShowLoadingRef.current = true;

      setLoadStatus((prev) => (prev === 'error' ? 'loading' : prev));

      setLoadTimeout(
        () => {
          onLoad(data as any)
            .then((data) => {
              setApiData(data);
              setLoadStatus('success');
            })
            .catch((err) => {
              setLoadStatus(err === undefined ? 'empty_error' : 'error');
              setError(err);
            })
            .finally(() => {
              if (isShowLoadingRef.current) {
                g.loading.hide();
                isShowLoadingRef.current = false;
                isLoadingRef.current = false;
              }
            });
        },
        retry ? retryDelay : 0
      );
    },
    [data, onLoad, retryDelay, setLoadTimeout]
  );

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    return () => {
      if (isShowLoadingRef.current) {
        g.loading.hide();
        isShowLoadingRef.current = false;
      }
    };
  }, []);

  {
    const effectEvent = useEffectEvent(() => {
      if (load) {
        doLoad(false);
      }
    });
    useEffect(() => effectEvent(), [load, data]);
  }

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<ApiLoadContainerCommands>(
    () => ({
      load() {
        doLoad(false);
      },
    }),
    [doLoad]
  );

  useForwardRef(ref, commands);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const errorMessage = useMemo(() => {
    if (error) {
      const apiErrorCode = api.error.getResultCode(error);
      if (apiErrorCode !== undefined) {
        return `(A-${apiErrorCode})\n문제가 발생했습니다.`;
      } else if (error.status) {
        return `(E-${error.status})\n문제가 발생했습니다.`;
      } else {
        return '문제가 발생했습니다.';
      }
    }
  }, [error]);

  return contains(['loading', 'empty_error'], loadStatus) ? null : loadStatus === 'error' ? (
    <ErrorRetry message={errorMessage} onRetry={() => doLoad(true)} />
  ) : (
    <Flex {...props}>{typeof children === 'function' ? children(apiData as any) : children}</Flex>
  );
};

export default ApiLoadContainer;
