import { type GridContextValue } from './GridContext.types';

const GridContext = React.createContext<GridContextValue>({} as GridContextValue);

export default GridContext;
