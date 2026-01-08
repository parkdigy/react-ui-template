import GridContext from './GridContext';
import { type GridContextValue } from './GridContext.types';

export function useGridState(): GridContextValue {
  const value = useContext(GridContext);
  if (empty(value)) {
    throw new Error('useGridState should be used within GridContext.Provider');
  }
  return value;
}
