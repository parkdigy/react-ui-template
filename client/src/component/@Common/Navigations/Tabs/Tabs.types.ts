export interface TabsItemInfo<T extends string> {
  label: string;
  value: T;
  disabled?: boolean;
}

export interface TabsProps<T extends string> {
  ref?: Ref<HTMLDivElement>;
  items: TabsItemInfo<T>[];
  value: T;
  onChange: (value: T) => void;
}
