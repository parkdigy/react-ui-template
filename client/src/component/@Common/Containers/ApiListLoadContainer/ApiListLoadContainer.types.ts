import { ApiPaging } from '@api';
import { RefObject } from 'react';

export interface ApiListLoadContainerCommands {
  load: () => void;
}

export type TApiListLoadContainerLoadedData<TListItem> = {
  list: TListItem[];
  paging?: ApiPaging['paging'];
};

export interface ApiListLoadContainerProps<T, TListItem> extends Omit<BoxProps, 'ref' | 'children' | 'onLoad'> {
  load?: boolean;
  data?: T;
  retryDelay?: number;
  limit?: number;
  toScrollRef?: RefObject<HTMLElement | null>;
  noDataMessage?: string;
  noDataPaddingVertical?: number;
  divider?: ReactNode;
  listWrapperProps?: Omit<FlexProps, 'ref' | 'children'>;
  onLoad:
    | (() => Promise<TApiListLoadContainerLoadedData<TListItem>>)
    | ((data: T & { page: number; limit?: number }) => Promise<TApiListLoadContainerLoadedData<TListItem>>);
  onRenderItem: (item: TListItem, index: number) => ReactNode;
}
