import { Dev_FormOptions, Dev_FormOptionsData, Dev_Panel } from '../@Common';
import { AllColors } from '@theme';
import code from './Dev_NoData.code.md';
import { NoData } from '@ccomp';
import { FlattenFormOptions } from '../@types/FlattenFormOptions';

const _formOptions = ['message'] as const;
type _formOptions = Exclude<FlattenFormOptions<typeof _formOptions>, '|' | null>;
const _formOptionsDefaultData: Dev_FormOptionsData = { label: 'NoData' };

export const Dev_NoData = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel gap={20}>
      <TTitleLarge700 color='primary'>NoData</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          defaultData={_formOptionsDefaultData}
          colors={AllColors}
          backgroundColors={AllColors}
          useCustomColor
          code={code}
          codePropsMap={{
            props: data,
          }}
          onChange={setData}
          onGetTest={() => <NoData {...data} />}
        />
      </Dev_Panel>
    </Panel>
  );
};

export default Dev_NoData;
