/********************************************************************************************************************
 * 화면 크기 정보를 제공하는 Context 의 Provider
 * ******************************************************************************************************************/

import { type ScreenSizeContextProviderProps as Props } from './ScreenSizeContextProvider.types';
import ScreenSizeContext from './ScreenSizeContext';
import {
  AllScreenAliases,
  type ScreenSizeInfo,
  type ScreenSizeInfoIsKey,
  type ScreenSizeInfoLargerThanKey,
  type ScreenSizeInfoLargerThanOrEqualKey,
  type ScreenSizeInfoSmallerThanKey,
  type ScreenSizeInfoSmallerThanOrEqualKey,
} from '@theme';

const ScreenSizeContextProvider = ({ children }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();
  const { width: windowWidth } = useWindowSize();

  /********************************************************************************************************************
   * screenSizeInfo
   * ******************************************************************************************************************/

  const [lastScreenAliasValue, setLastScreenAliasValue] = useState<string>();
  const [screenSizeInfo, setScreenSizeInfo] = useState<ScreenSizeInfo>();

  /********************************************************************************************************************
   * Changed
   * ******************************************************************************************************************/

  useChanged(() => {
    const screenAliases = objectKeys(AllScreenAliases).filter((screen) => {
      const [min] = AllScreenAliases[screen];
      if (theme.screens[min] <= windowWidth) {
        return true;
      }
    });

    const screenAliasesValue = screenAliases!.join(',');
    if (lastScreenAliasValue !== screenAliasesValue) {
      setLastScreenAliasValue(screenAliasesValue);

      const is: Record<ScreenSizeInfoIsKey, boolean> = {} as Record<ScreenSizeInfoIsKey, boolean>;
      const smallerThan: Record<ScreenSizeInfoSmallerThanKey, boolean> = {} as Record<
        ScreenSizeInfoSmallerThanKey,
        boolean
      >;
      const smallerThanOrEqual: Record<ScreenSizeInfoSmallerThanOrEqualKey, boolean> = {} as Record<
        ScreenSizeInfoSmallerThanOrEqualKey,
        boolean
      >;
      const largerThan: Record<ScreenSizeInfoLargerThanKey, boolean> = {} as Record<
        ScreenSizeInfoLargerThanKey,
        boolean
      >;
      const largerThanOrEqual: Record<ScreenSizeInfoLargerThanOrEqualKey, boolean> = {} as Record<
        ScreenSizeInfoLargerThanOrEqualKey,
        boolean
      >;

      objectKeys(AllScreenAliases).forEach((screen) => {
        is[screen] = screenAliases[screenAliases.length - 1] === screen;
        smallerThan[screen] = !screenAliases.includes(screen);
        smallerThanOrEqual[screen] = !screenAliases.includes(screen) || is[screen];
        largerThan[screen] = screenAliases.includes(screen) && !is[screen];
        largerThanOrEqual[screen] = screenAliases.includes(screen);
      });

      is.mobile = is.mobileSm || is.mobileMd || is.mobileLg;
      is.tablet = is.tabletSm || is.tabletMd || is.tabletLg;
      is.desktop = is.desktopSm || is.desktopMd || is.desktopLg;

      smallerThan.tablet = is.mobile;
      smallerThan.desktop = is.mobile || is.tablet;
      smallerThanOrEqual.mobile = is.mobile;
      smallerThanOrEqual.tablet = is.mobile || is.tablet;
      smallerThanOrEqual.desktop = is.mobile || is.tablet || is.desktop;
      largerThan.mobile = is.tablet || is.desktop;
      largerThan.tablet = is.desktop;
      largerThanOrEqual.mobile = is.mobile || is.tablet || is.desktop;
      largerThanOrEqual.tablet = is.tablet || is.desktop;
      largerThanOrEqual.desktop = is.desktop;

      setScreenSizeInfo({
        sizes: screenAliases,
        is,
        smallerThan,
        smallerThanOrEqual,
        largerThan,
        largerThanOrEqual,
      });
    }
  }, [windowWidth]);

  /********************************************************************************************************************
   * Return
   * ******************************************************************************************************************/

  return screenSizeInfo ? (
    <ScreenSizeContext.Provider value={screenSizeInfo}>{children}</ScreenSizeContext.Provider>
  ) : null;
};

export default ScreenSizeContextProvider;
