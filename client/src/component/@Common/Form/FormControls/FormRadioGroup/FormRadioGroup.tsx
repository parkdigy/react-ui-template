import React from 'react';
import { FormRadioGroupCommands, FormRadioGroupItemInfo, FormRadioGroupProps as Props } from './FormRadioGroup.types';
import { FormControlBase } from '../@common';
import { FormRadioGroupItem, FormRadioGroupItemCommands } from './FormRadioGroupItem';
import { koreanAppendRul } from '@pdg/korean';
import { useFormControlGroupState, useFormState } from '../../FormContext';
import { GridCols } from '../../../Layouts';
import { useResizeDetector } from 'react-resize-detector';
import './FormRadioGroup.scss';

export const FormRadioGroup = <T extends string | number | boolean>({
  ref,
  // FormRadioGroupProps
  type = 'radio',
  gap: initGap,
  items,
  grid: initGrid,
  requiredText,
  // FormControlCommonProps
  className,
  title,
  name,
  required,
  error: initError = false,
  disabled: initDisabled,
  value: initValue,
  onChange,
  onErrorChange,
  onValidate,
  // FormControlBaseProps
  ...formControlBaseProps
}: Props<T>) => {
  /********************************************************************************************************************
   * Initialize
   * ******************************************************************************************************************/

  const gap = ifUndefined(initGap, type === 'radio' ? 17 : 6);

  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { disabled: formDisabled } = useFormState();
  const controlGroupState = useFormControlGroupState();

  /********************************************************************************************************************
   * Timeout
   * ******************************************************************************************************************/

  const [, setUpdateAutoGridColsTimeout] = useTimeoutRef();

  /********************************************************************************************************************
   * ResizeDetector
   * ******************************************************************************************************************/

  const { ref: containerRef, width: containerWidth } = useResizeDetector({ handleHeight: false });
  const { ref: maxWidthRef, width: maxWidth } = useResizeDetector({ handleHeight: false });

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  // 자동 넓이 그리도 최초 계산 여부
  const isFirstCalcAutoGridColsRef = useRef(true);
  // overflow 상태로 들어갈 때 넓이 값을 저장, 다시 overflow 상태에서 벗어날 때 비교용
  const overflowCheckMinWidthRef = useRef(0);
  // 첫번째 활성 아이템의 커맨드 (validate 실패 시 포커스 이동용)
  const firstItemCommandsRef = useRef<FormRadioGroupItemCommands>(null);

  const onChangeRef = useAutoUpdateRef(onChange);
  const onValidateRef = useAutoUpdateRef(onValidate);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [itemsKey, setItemsKey] = useState(0);

  /** error */
  const [error, setError] = useState(initError);
  useFirstSkipChanged(() => setError(initError), [initError]);

  /** value */
  const [value, _setValue] = useState(initValue);
  useFirstSkipChanged(() => _setValue(initValue), [initValue]);
  const valueRef = useAutoUpdateRef(value);
  const setValue = useCallback(
    (value: React.SetStateAction<typeof initValue>) => {
      const v = typeof value === 'function' ? value(valueRef.current) : value;
      _setValue(v);
      valueRef.current = v;
    },
    [valueRef]
  );

  /** 아이템 최대 넓이 */
  const [itemMaxWidth, setItemMaxWidth] = useState(0);
  const itemMaxWidthRef = useAutoUpdateRef(itemMaxWidth);

  /** 자동 넓이 그리도 cols 정보 */
  const [autoGridCols, setAutoGridCols] = useState<GridCols>(12);

  /** overflow 상태인지 여부 */
  const [isOverflowing, setIsOverflowing] = useState(false);
  const isOverflowingRef = useAutoUpdateRef(isOverflowing);

  /** 첫번째 활성 아이템 인덱스 */
  const [firstItemIndex, setFirstItemIndex] = useState<number>();
  useChanged(() => {
    let newIndex = undefined;
    if (items) {
      for (let i = 0; i < items.length; i += 1) {
        if (!items[i].disabled) {
          newIndex = i;
          break;
        }
      }
    }
    setFirstItemIndex(newIndex);
  }, [items]);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const disabled = formDisabled || initDisabled;
  const useAutoGrid = !initGrid;

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  /** 값 유효성 검증 */
  const validate = useCallback(() => {
    let error: string | boolean = false;
    if (required && valueRef.current === undefined) {
      if (requiredText !== undefined) {
        error = requiredText;
      } else {
        if (notEmpty(title)) {
          error = `${koreanAppendRul(title)} 선택해 주세요.`;
        } else {
          error = '필수 선택 항목입니다.';
        }
      }
    }
    if (error === false && onValidateRef.current) {
      error = onValidateRef.current(valueRef.current);
    }

    if (error === false) {
      setError(false);
      return true;
    } else {
      setError(error);
      return false;
    }
  }, [onValidateRef, required, requiredText, setError, title, valueRef]);

  /** overflow 상태 체크 */
  const checkOverflow = useCallback(() => {
    if (useAutoGrid) {
      if (containerRef.current) {
        if (isOverflowingRef.current) {
          // overflow 상태일 때, overflow 진입시의 넓이보다 더 커졌을 때, overflow 해제
          if (containerRef.current.scrollWidth > overflowCheckMinWidthRef.current) {
            setIsOverflowing(false);
          }
        } else {
          // 일반 상태일 때, scrollWidth가 offsetWidth보다 커졌을 때, overflow 상태로 변경
          if (containerRef.current.scrollWidth > maxWidthRef.current.offsetWidth) {
            // overflow 진입시의 넓이 저장
            overflowCheckMinWidthRef.current = containerRef.current.scrollWidth;

            setIsOverflowing(true);
          }
        }
      }
    }
  }, [containerRef, isOverflowingRef, maxWidthRef, setIsOverflowing, useAutoGrid]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEventEffect(() => {
    // 첫번째 활성화 아이템 커맨드 초기화
    firstItemCommandsRef.current = null;
    // 자동 넓이 그리드 최초 계산 여부 초기화
    isFirstCalcAutoGridColsRef.current = true;
    // 최대 넓이 아이템 초기화
    setItemMaxWidth(0);
    // overflow 상태 초기화
    setIsOverflowing(false);
    // overflow 체크용 넓이 초기화
    overflowCheckMinWidthRef.current = 0;

    setItemsKey((prev) => prev + 1);

    if (useAutoGrid) {
      nextTick(() => {
        checkOverflow();
      });
    }
  }, [items]);

  useFirstSkipEffect(() => {
    if (error) validate();
  }, [value]);

  useFirstSkipEffect(() => {
    onErrorChange?.(error);
    controlGroupState && controlGroupState.onErrorChange(name, error);
  }, [error]);

  /** overflow 상태 체크 및 설정 */

  useEventEffect(() => {
    checkOverflow();
  }, [useAutoGrid, maxWidth]);

  /** 자동 넓이 그리드 cols 계산 */
  useEventEffect(() => {
    if (useAutoGrid && containerWidth && itemMaxWidth) {
      setUpdateAutoGridColsTimeout(
        () => {
          isFirstCalcAutoGridColsRef.current = false;

          let newAutoGridCols = 12;

          let totalWidth = newAutoGridCols * itemMaxWidth + (newAutoGridCols - 1) * gap;
          while (newAutoGridCols > 1 && totalWidth > containerWidth) {
            newAutoGridCols -= 1;
            totalWidth = newAutoGridCols * itemMaxWidth + (newAutoGridCols - 1) * gap;
          }
          setAutoGridCols(newAutoGridCols as GridCols);
        },
        isFirstCalcAutoGridColsRef.current ? 0 : 50
      );
    }
  }, [items, useAutoGrid, containerWidth, itemMaxWidth, gap]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<FormRadioGroupCommands<T>>(
    () => ({
      focus() {
        firstItemCommandsRef.current?.focus();
      },
      validate,
      setError,
      getValue() {
        return valueRef.current;
      },
      setValue(newValue) {
        setValue(newValue);
        onChangeRef.current?.(newValue);
      },
    }),
    [onChangeRef, setValue, validate, valueRef]
  );

  useForwardRef(ref, commands);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  /** 아이템 클릭 핸들러 */
  const handleItemClick = useCallback(
    (value: T) => {
      commands.setValue(value);
    },
    [commands]
  );

  /** 아이템 커맨드 설정 핸들러 */
  const handleItemCommands = useCallback((commands: FormRadioGroupItemCommands) => {
    firstItemCommandsRef.current = commands;
  }, []);

  /** 아이템 넓이 변경 핸들러 */
  const handleItemChangeWidth = useCallback(
    (width: number) => {
      if (width > itemMaxWidthRef.current) {
        setItemMaxWidth(width);
      }
    },
    [itemMaxWidthRef, setItemMaxWidth]
  );

  /********************************************************************************************************************
   * Render Function
   * ******************************************************************************************************************/

  const getItem = useCallback(
    (index: number, item: FormRadioGroupItemInfo<T>, buttonFullWidth = false) => (
      <FormRadioGroupItem
        key={index}
        type={type}
        itemsKey={itemsKey}
        label={item.label}
        value={item.value}
        disabled={disabled || item.disabled}
        error={error !== false}
        active={value === item.value}
        buttonWidth={type === 'radio' ? undefined : isOverflowing && itemMaxWidth ? itemMaxWidth : undefined}
        buttonFullWidth={buttonFullWidth}
        onClick={handleItemClick}
        onChangeWidth={handleItemChangeWidth}
        onCommands={firstItemIndex === undefined || index < firstItemIndex ? handleItemCommands : undefined}
      />
    ),
    [
      disabled,
      error,
      firstItemIndex,
      handleItemChangeWidth,
      handleItemClick,
      handleItemCommands,
      isOverflowing,
      itemMaxWidth,
      itemsKey,
      type,
      value,
    ]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  let grid: Props<T>['grid'] = undefined;

  if (initGrid) {
    grid = initGrid;
  } else if (isOverflowing) {
    grid = { cols: autoGridCols, gap };
  }

  return (
    <FormControlBase
      className={classnames(className, 'FormRadioGroup', `FormRadioGroup-${type}`)}
      type='radio_group'
      name={name}
      commands={commands}
      gap={type === 'radio' ? 12 : 10}
      title={title}
      required={required}
      disabled={disabled}
      error={error}
      {...formControlBaseProps}
    >
      <div ref={maxWidthRef} className='FormRadioGroup__MaxWidth' />
      {/* mh, ph는 outline 안보이는 문제 해결을 위해 추가 */}
      <div ref={containerRef} className='FormRadioGroup__Body'>
        {grid ? (
          <div className='FormRadioGroup__Body__GridContainer'>
            <Grid gap={ifUndefined(grid.gap, gap)} {...grid}>
              {items.map((item, idx) => (
                <Col key={idx}>{getItem(idx, item, grid?.cols === 1)}</Col>
              ))}
            </Grid>
          </div>
        ) : (
          <Flex row center gap={gap}>
            {items.map((item, idx) => getItem(idx, item))}
          </Flex>
        )}
      </div>
    </FormControlBase>
  );
};

export default FormRadioGroup;
