import { Dev_FormOptions, type Dev_FormOptionsData, Dev_Panel } from '../@Common';
import { List } from '@ccomp';
import code from './Dev_List.code.md';
import { type FlattenFormOptions } from '../@types/FlattenFormOptions';

const _formOptions = [['listType', 'listVariant'], '|', ['title', 'gap']] as const;
type _formOptions = Exclude<FlattenFormOptions<typeof _formOptions>, '|' | null>;

const Items = new Array(10).fill(0).map((_, i) => `아이템 ${i + 1}`);

const Dev_List = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { listType, listVariant, gap, ...otherData } = _data;

  const data = {
    type: ifEmpty(listType, undefined),
    variant: ifEmpty(listVariant, undefined),
    gap: ifEmpty(gap, undefined),
    ...otherData,
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel gap={20}>
      <TTitleLarge700 color='primary'>리스트 (List)</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          useCustomColor
          code={code}
          codePropsMap={{ props: data }}
          onChange={setData}
          onGetTest={() => (
            <Box fullWidth>
              <List {...data} items={Items} />
            </Box>
          )}
        />
      </Dev_Panel>
    </Panel>
  );
};

export default Dev_List;
