import { createContext } from 'react';
import { type RowContextValue } from './RowContext.types';

const RowContext = createContext<RowContextValue>({} as RowContextValue);

export default RowContext;
