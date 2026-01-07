import { type GridProps as Props } from './Grid.types';
import { GridContextProvider, type GridContextValue } from '../Context';
import { AllScreenAliases, GeneralScreens } from '@theme';
import './Grid.scss';

export const Grid = ({ children, className, cols = 12, gap = 0, ...props }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const screen = useScreenSize();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const rowNumber = useRef(0);
  const rowNumberMap = useRef<Dict<number>>({});

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const finalCols = useMemo(() => {
    if (typeof cols === 'number') {
      return cols;
    } else {
      let currentCols = 1;
      let newFinalCols = currentCols;
      objectKeys(AllScreenAliases).find((alias) => {
        if (cols[alias]) currentCols = cols[alias];
        if (!contains(GeneralScreens, alias) && screen.is[alias]) {
          newFinalCols = currentCols;
          return true;
        }
      });
      return newFinalCols;
    }
  }, [cols, screen.is]);

  /********************************************************************************************************************
   * Context Value
   * ******************************************************************************************************************/

  const contextValue = useMemo<GridContextValue>(
    () => ({
      cols: finalCols,
      getRowNumber(id: string) {
        if (rowNumberMap.current[id]) {
          return rowNumberMap.current[id];
        }
        rowNumber.current += 1;
        rowNumberMap.current[id] = rowNumber.current;
        return rowNumberMap.current[id];
      },
    }),
    [finalCols]
  );

  /********************************************************************************************************************
   * Style
   * ******************************************************************************************************************/

  const style = {
    '--grid-cols': `${finalCols}`,
    '--grid-gap': typeof gap === 'number' ? `${gap}px` : gap,
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <GridContextProvider value={contextValue}>
      <Box className={classnames(className, 'Grid')} cssVars={style} {...props}>
        {children}
      </Box>
    </GridContextProvider>
  );
};

export default Grid;
