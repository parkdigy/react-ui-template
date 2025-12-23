import React from 'react';
import { ColorPickerProps as Props } from './ColorPicker.types';
import { HexAlphaColorPicker } from 'react-colorful';
import { useWindowSize } from 'usehooks-ts';
import './ColorPicker.scss';

export const ColorPicker = ({ ref, className, defaultColor, color: initColor, onChange }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const id = useId();
  const { width: windowWidth } = useWindowSize();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const popoverRef = useRef<HTMLDivElement>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [swatchBoundingClientRect, setSwatchBoundingClientRect] = useState<DOMRect>();

  /** color */
  const [color, _setColor] = useState(initColor ?? defaultColor);

  /** isOpen */
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useAutoUpdateRef(isOpen);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  {
    const effectEvent = useEffectEvent(() => {
      if (!isOpen) {
        _setColor(initColor);
      }
    });
    useEffect(() => {
      return effectEvent();
    }, [initColor]);
  }

  /** 외부 영역 클릭 시 팝오버 닫기 */
  {
    const effectEvent = useEffectEvent(() => {
      let startedInside = false;
      let startedWhenMounted = false;

      const clickHandler = (event: MouseEvent) => {
        if (!isOpenRef.current) return;
        if (event.target && (event.target as HTMLElement).className.includes(`ColorPicker__Swatch-${id}`)) return;
        if (startedInside || !startedWhenMounted) return;
        if (!popoverRef.current || popoverRef.current.contains(event.target as any)) return;

        setIsOpen(false);
      };

      const validateEventStart = (event: MouseEvent | TouchEvent) => {
        if (!isOpenRef.current) return;

        startedWhenMounted = !!popoverRef.current;
        startedInside = !!popoverRef.current && popoverRef.current.contains(event.target as any);
      };

      document.addEventListener('mousedown', validateEventStart);
      document.addEventListener('touchstart', validateEventStart);
      document.addEventListener('click', clickHandler);

      return () => {
        document.removeEventListener('mousedown', validateEventStart);
        document.removeEventListener('touchstart', validateEventStart);
        document.removeEventListener('click', clickHandler);
      };
    });
    useEffect(() => effectEvent(), []);
  }

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const setColor = useCallback(
    (newColor: string) => {
      _setColor(newColor);
      onChange?.(newColor);
    },
    [_setColor, onChange]
  );

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const popoverStyle = useMemo(() => {
    let style: CSSProperties | undefined;

    if (isOpen && swatchBoundingClientRect) {
      style = {};
      const { left, width } = swatchBoundingClientRect;
      const center = left + width / 2;

      if (center + 110 > windowWidth) {
        style.right = 0;
      } else if (center - 110 < 0) {
        style.left = 0;
      } else {
        style.left = '50%';
        style.transform = 'translate(-50%, 0)';
      }
    }

    return style;
  }, [isOpen, swatchBoundingClientRect, windowWidth]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div ref={ref} className={classnames(className, 'ColorPicker')}>
      <div
        ref={(v) => setSwatchBoundingClientRect(v?.getBoundingClientRect())}
        className={classnames('ColorPicker__Swatch', `ColorPicker__Swatch-${id}`)}
        style={{ backgroundColor: color }}
        onClick={(e) => {
          if ((e.target as HTMLElement).className.includes(`ColorPicker__Swatch-${id}`)) {
            toggle();
          }
        }}
      >
        <div
          className={classnames('ColorPicker__Popover', isOpen && 'ColorPicker__Popover-open')}
          style={popoverStyle}
          ref={popoverRef}
        >
          {isOpen && (
            <>
              <HexAlphaColorPicker color={color} onChange={setColor} />
              <div className='ColorPicker__CloseButton' onClick={toggle}>
                닫기
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
