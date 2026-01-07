import { createContext } from 'react';
import { type GridContextValue } from './GridContext.types';

const GridContext = createContext<GridContextValue>({} as GridContextValue);

export default GridContext;
