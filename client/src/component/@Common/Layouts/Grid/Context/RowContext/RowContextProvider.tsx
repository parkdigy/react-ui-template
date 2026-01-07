import { RowContextProviderProps as Props } from './RowContextProvider.types';
import RowContext from './RowContext';

export const RowContextProvider = ({ children, value }: Props) => {
  return <RowContext.Provider value={value}>{children}</RowContext.Provider>;
};

export default RowContextProvider;
