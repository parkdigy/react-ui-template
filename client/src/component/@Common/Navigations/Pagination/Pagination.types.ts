export interface PaginationPaging {
  current_page: number;
  last_page: number;
}

export interface PaginationProps {
  ref?: Ref<HTMLDivElement>;
  paging: PaginationPaging;
  onPageChange?: (page: number) => void;
}
