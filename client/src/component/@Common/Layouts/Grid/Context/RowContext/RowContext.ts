import { type RowContextValue } from './RowContext.types';

const RowContext = React.createContext<RowContextValue>({} as RowContextValue);

export default RowContext;
