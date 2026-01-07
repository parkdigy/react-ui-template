import AppContext from './AppContext';
import { type AppContextValue } from './AppContext.types';
import { useContext } from 'react';

export function useAppState(): AppContextValue {
  const value = useContext(AppContext);
  if (empty(value)) {
    throw new Error('useAppState should be used within AppContextProvider');
  }
  return value;
}

export default useAppState;
