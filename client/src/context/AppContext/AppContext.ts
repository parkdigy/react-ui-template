/********************************************************************************************************************
 * App Context
 * - 기본 Context
 * ******************************************************************************************************************/

import { type AppContextValue } from './AppContext.types';

const AppContext = React.createContext<AppContextValue>({} as any);

export default AppContext;
