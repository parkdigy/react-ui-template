import { type BoxComponent, type BoxHTMLProps, type BoxProps as Props } from './Box.types';
import './Box.scss';

export const Box = <
  C extends BoxComponent = 'div',
  E extends HTMLDivElement | HTMLSpanElement = C extends 'span' ? HTMLSpanElement : HTMLDivElement,
>({
  component,
  className,
  center,
  nowrap,
  absolute,
  relative,
  fixed,
  underline,
  textDecoration,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  hoverStyle,
  activeStyle,
  ...props
}: Props<C, E>) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isActive, setIsActive] = useState(false);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<E>) => {
      setIsMouseEnter(true);
      onMouseEnter?.(e);
    },
    [onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<E>) => {
      setIsMouseEnter(false);
      onMouseLeave?.(e);
    },
    [onMouseLeave]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<E>) => {
      setIsActive(true);
      onMouseDown?.(e);
    },
    [onMouseDown]
  );

  const handleGlobalMouseUp = useCallback(() => {
    setIsActive(false);
  }, []);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    if (activeStyle) {
      if (isActive) {
        window.addEventListener('mouseup', handleGlobalMouseUp);
      }

      return () => {
        window.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    }
  }, [activeStyle, handleGlobalMouseUp, isActive]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <CustomComponent<BoxHTMLProps<E>>
      component={component ?? 'div'}
      className={classnames(
        className,
        'Box',
        center && 'Box-center',
        nowrap && 'Box-nowrap',
        absolute && 'Box-absolute',
        relative && 'Box-relative',
        fixed && 'Box-fixed'
      )}
      textDecoration={textDecoration !== undefined ? textDecoration : underline ? 'underline' : undefined}
      onMouseEnter={hoverStyle ? handleMouseEnter : onMouseEnter}
      onMouseLeave={hoverStyle ? handleMouseLeave : onMouseLeave}
      onMouseDown={activeStyle ? handleMouseDown : onMouseDown}
      {...props}
      {...(hoverStyle && isMouseEnter ? hoverStyle : undefined)}
      {...(activeStyle && isActive ? activeStyle : undefined)}
    />
  );
};

export default Box;
