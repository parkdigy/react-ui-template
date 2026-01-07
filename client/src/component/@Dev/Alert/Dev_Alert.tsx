import { Dev_FormOptions, type Dev_FormOptionsData, Dev_Panel } from '../@Common';
import code from './Dev_Alert.code.md';
import { Alert } from '@ccomp';
import { Dev_Alert_Variant } from './Dev_Alert_Variant';
import { type FlattenFormOptions } from '../@types/FlattenFormOptions';

const _formOptions = [['alertType', 'showIcon'], '|', 'title', 'message'] as const;
type _formOptions = Exclude<FlattenFormOptions<typeof _formOptions>, '|' | null>;
const _formOptionDefaultData: Dev_FormOptionsData = { showIcon: true, message: '메시지' };

export const Dev_Alert = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData, _formOptions>>({});

  const { alertType: type, title, message, ...otherData } = _data;

  const data = {
    type: ifEmpty(type, undefined),
    message: ifEmpty(message, undefined),
    title: ifEmpty(title, undefined),
    ...otherData,
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel gap={20}>
      <TTitleLarge700 color='primary'>Alert</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          defaultData={_formOptionDefaultData}
          code={code}
          codePropsMap={{ alert: data }}
          onChange={setData}
          onGetTest={() => (
            <Box fullWidth>
              <Alert {...data}></Alert>
            </Box>
          )}
        />
      </Dev_Panel>

      <Dev_Alert_Variant />
    </Panel>
  );
};

export default Dev_Alert;
