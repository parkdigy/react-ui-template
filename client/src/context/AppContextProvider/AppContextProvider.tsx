/********************************************************************************************************************
 * App Context Provider
 * - 기본 Context Provider
 * ******************************************************************************************************************/

import { type AppContextProviderProps as Props } from './AppContextProvider.types';
import AppContext from '../AppContext';

const AppContextProvider = ({ children, value }: Props) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
