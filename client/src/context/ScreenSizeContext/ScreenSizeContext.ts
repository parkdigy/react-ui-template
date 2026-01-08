/********************************************************************************************************************
 * 화면 크기 정보를 제공하는 Context
 * ******************************************************************************************************************/

import { type ScreenSizeInfo } from '@theme';

const ScreenSizeContext = React.createContext<ScreenSizeInfo>({} as ScreenSizeInfo);

export default ScreenSizeContext;
