import React from 'react';
import {
  ApiListLoadContainerCommands,
  ApiListLoadContainerProps as Props,
  ApiListLoadContainerLoadedData,
  ApiListLoadContainerFinalData,
} from './ApiListLoadContainer.types';
import { useForwardRef, useTimeoutRef } from '@pdg/react-hook';
import app from '@app';
import { useSearchParams } from 'react-router';
import { ErrorRetry } from '../../Errors';
import Pagination from '../../Navigations/Pagination';
import NoData from '../../Feedbacks/NoData';

export const ApiListLoadContainer = ToForwardRefExoticComponent(
  AutoTypeForwardRef(function <T extends { [key in string]: any } = any, TListItem = any>(
    {
      className,
      load,
      data: initData,
      limit,
      retryDelay = 1000,
      toScrollRef,
      gap = 25,
      noDataMessage: initNoDataMessage,
      noDataPaddingVertical = 200,
      divider,
      listWrapperProps,
      onLoad,
      onRenderItem,
      onRenderHeader,
      ...props
    }: Props<T, TListItem>,
    ref: React.ForwardedRef<ApiListLoadContainerCommands>
  ) {
    /********************************************************************************************************************
     * SearchParams
     * ******************************************************************************************************************/

    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(ifNull(searchParams.get('p'), '1'));

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const isLoadingRef = useRef(false);
    const isShowLoadingRef = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const data = useMemo(
      () => ({ page, limit, ...initData }) as ApiListLoadContainerFinalData<T>,
      [page, limit, initData]
    );

    /********************************************************************************************************************
     * Timeout
     * ******************************************************************************************************************/

    const [, setLoadTimeout] = useTimeoutRef();

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [loadStatus, setLoadStatus] = useState<'loading' | 'success' | 'error' | 'empty_error'>('loading');
    const [error, setError] = useState<any>();
    const [apiResultData, setApiResultData] = useState<ApiListLoadContainerFinalData<T>>();
    const [apiResult, setApiResult] = useState<ApiListLoadContainerLoadedData<TListItem>>();
    const [apiResultNoDataMessage, setApiResultNoDataMessage] = useState<string>();

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      return () => {
        if (isShowLoadingRef.current) {
          __hideLoading();
          isShowLoadingRef.current = false;
        }
      };
    }, []);

    useEffect(() => {
      if (load) {
        doLoad(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [load, data]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const doLoad = useCallback(
      (retry: boolean) => {
        if (isLoadingRef.current) return;
        isLoadingRef.current = true;

        __showLoading();
        isShowLoadingRef.current = true;

        setLoadStatus((prev) => (prev === 'error' ? 'loading' : prev));

        setLoadTimeout(
          () => {
            onLoad(data as any)
              .then((result) => {
                setApiResultData(data);
                setApiResult(result);
                setLoadStatus('success');
                setApiResultNoDataMessage(initNoDataMessage);
              })
              .catch((err) => {
                setLoadStatus(err === undefined ? 'empty_error' : 'error');
                setError(err);
              })
              .finally(() => {
                if (isShowLoadingRef.current) {
                  __hideLoading();
                  isShowLoadingRef.current = false;
                  isLoadingRef.current = false;
                }
              });
          },
          retry ? retryDelay : 0
        );
      },
      [data, initNoDataMessage, onLoad, retryDelay, setLoadTimeout]
    );

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands = useMemo<ApiListLoadContainerCommands>(
      () => ({
        load() {
          doLoad(false);
        },
      }),
      [doLoad]
    );

    useForwardRef(ref, commands);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handlePageChange = useCallback(
      (page: number) => {
        const scrollY =
          toScrollRef && toScrollRef.current
            ? toScrollRef.current?.getBoundingClientRect().y
            : containerRef.current?.getBoundingClientRect().y;
        if (scrollY !== undefined && scrollY < 0) {
          __setNavigateScrollTopPos(app.getScrollTop() + scrollY - 20);
        } else {
          __setNavigateScrollTopPos(app.getScrollTop());
        }

        app.updateSearchParams(setSearchParams, { p: page.toString() });
      },
      [setSearchParams, toScrollRef]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    const errorMessage = useMemo(() => {
      if (error) {
        const apiErrorCode = app.getAxiosApiErrorResultCode(error);
        if (apiErrorCode !== undefined) {
          return `(A-${apiErrorCode})\n문제가 발생했습니다.`;
        } else if (error.status) {
          return `(E-${error.status})\n문제가 발생했습니다.`;
        } else {
          return '문제가 발생했습니다.';
        }
      }
    }, [error]);

    return (
      <Flex ref={containerRef} className={classnames(className, 'ApiListLoadContainer')} gap={gap} {...props}>
        {contains(['loading', 'empty_error'], loadStatus) ? null : loadStatus === 'error' ? (
          <ErrorRetry message={errorMessage} onRetry={() => doLoad(true)} />
        ) : apiResult ? (
          <React.Fragment>
            {onRenderHeader && onRenderHeader(apiResultData, apiResult.list, apiResult.paging)}
            <Flex
              className='ApiListLoadContainer__ListWrapper'
              borderTopWidth={apiResult.list.length > 0 ? 2 : 1}
              borderTopColor='divider'
              borderBottomWidth={apiResult.list.length > 0 ? 2 : 1}
              borderBottomColor='divider'
              {...listWrapperProps}
            >
              {apiResult.list.length > 0 ? (
                <>
                  {apiResult.list.map((item, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && divider}
                      {onRenderItem(item, idx)}
                    </React.Fragment>
                  ))}
                </>
              ) : (
                <NoData message={apiResultNoDataMessage} pv={noDataPaddingVertical} />
              )}
            </Flex>

            {apiResult.paging && apiResult.paging.last_page > 1 && (
              <Flex className='ApiListLoadContainer__PaginationWrapper' center>
                <Pagination paging={apiResult.paging} onPageChange={handlePageChange} />
              </Flex>
            )}
          </React.Fragment>
        ) : null}
      </Flex>
    );
  })
);

export default ApiListLoadContainer;
