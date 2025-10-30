import { ApiPaging } from '@api';
import { RefObject } from 'react';

export interface ApiListLoadContainerCommands {
  load: () => void;
}

export type ApiListLoadContainerLoadedData<TListItem> = {
  list: TListItem[];
  paging?: ApiPaging['paging'];
};

export interface ApiListLoadContainerProps<T extends { [key in string]: any }, TListItem>
  extends Omit<BoxProps, 'ref' | 'children' | 'onLoad'> {
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
    | (() => Promise<ApiListLoadContainerLoadedData<TListItem>>)
    | ((data: T & { page: number; limit?: number }) => Promise<ApiListLoadContainerLoadedData<TListItem>>);
  onRenderItem: (item: TListItem, index: number) => ReactNode;
}
