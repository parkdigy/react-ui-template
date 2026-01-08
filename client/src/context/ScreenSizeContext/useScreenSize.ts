import ScreenSizeContext from './ScreenSizeContext';
import { type ScreenSizeInfo } from '@theme';

export default function useScreenSize(): ScreenSizeInfo {
  const value = useContext(ScreenSizeContext);
  if (empty(value)) {
    throw new Error('useScreenSize should be used within ScreenSizeContextProvider.');
  }
  return value;
}
