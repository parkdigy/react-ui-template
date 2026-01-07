import { Dev_FormOptions, type Dev_FormOptionsData, Dev_Panel } from '../@Common';
import { AllColors } from '@theme';
import code from './Dev_Chip.code.md';
import { Chip } from '@ccomp';
import { type FlattenFormOptions } from '../@types/FlattenFormOptions';

const _formOptions = [
  ['chipVariant', 'label'],
  '|',
  'size',
  '|',
  ['color', 'backgroundColor'],
  '|',
  ['onClick', 'onRemoveClick'],
] as const;
type _formOptions = Exclude<FlattenFormOptions<typeof _formOptions>, '|' | null>;
const _formOptionsDefaultData: Dev_FormOptionsData = { label: 'Chip' };

export const Dev_Chip = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { color, backgroundColor, size, chipVariant, label, onClick, onRemoveClick, ...otherData } = _data;

  const data = {
    color: ifEmpty(color, undefined),
    backgroundColor: ifEmpty(backgroundColor, undefined),
    size: ifEmpty(size, undefined),
    variant: ifEmpty(chipVariant, undefined),
    label: ifUndefined(label, ''),
    ...otherData,
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel gap={20}>
      <TTitleLarge700 color='primary'>Chip</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          defaultData={_formOptionsDefaultData}
          colors={AllColors}
          backgroundColors={AllColors}
          useCustomColor
          code={code}
          codePropsMap={{
            props: {
              ...data,
              onClick: onClick ? '{...}' : undefined,
              onRemoveClick: onRemoveClick ? '{...}' : undefined,
            },
          }}
          onChange={setData}
          onGetTest={() => (
            <Chip
              onClick={onClick ? () => toast.info('클릭') : undefined}
              onRemoveClick={onRemoveClick ? () => toast.info('삭제 클릭') : undefined}
              {...data}
            />
          )}
        />
      </Dev_Panel>
    </Panel>
  );
};

export default Dev_Chip;
