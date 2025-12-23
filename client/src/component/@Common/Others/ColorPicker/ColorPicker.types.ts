export interface ColorPickerProps {
  ref?: Ref<HTMLDivElement>;
  className?: string;
  defaultColor?: string;
  color?: string;
  onChange?: (color: string) => void;
}
