import React from 'react';
import { BoxHtmlProps, BoxProps as Props } from './Box.types';
import { CustomComponent } from '../../CustomComponent';
import './Box.scss';

export const Box = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      component = 'div',
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
    },
    ref
  ) => {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const [isActive, setIsActive] = useState(false);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        setIsMouseEnter(true);
        onMouseEnter?.(e);
      },
      [onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        setIsMouseEnter(false);
        onMouseLeave?.(e);
      },
      [onMouseLeave]
    );

    const handleMouseDown = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
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
      <CustomComponent<BoxHtmlProps>
        component={component}
        ref={ref}
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
  }
);

export default Box;
