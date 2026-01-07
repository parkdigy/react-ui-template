import Dev_ErrorRetry_Variant from './Dev_ErrorRetry_Variant';
import { Dev_FormOptions, type Dev_FormOptionsData, Dev_Panel } from '../@Common';
import { DefaultColors } from '@theme';
import code from './Dev_ErrorRetry.code.md';
import { type FlattenFormOptions } from '../@types/FlattenFormOptions';

const _formOptions = ['color', '|', 'title', 'message', '|', 'onRetry'] as const;
type _formOptions = Exclude<FlattenFormOptions<typeof _formOptions>, '|' | null>;

export const Dev_ErrorRetry = () => {
  /********************************************************************************************************************
   * data
   * ******************************************************************************************************************/

  const [_data, setData] = useState<Pick<Dev_FormOptionsData<DefaultColors>, _formOptions>>({});

  const { color, message, onRetry, ...data } = _data;

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel gap={20}>
      <TTitleLarge700 color='primary'>오류 (ErrorRetry)</TTitleLarge700>

      <Dev_Panel>
        <Dev_FormOptions
          options={_formOptions}
          colors={DefaultColors}
          code={code}
          codePropsMap={{
            errorRetry: {
              color: ifEmpty(color, undefined),
              message: empty(message) ? undefined : `{'${message.replace(/\n/g, '\\n')}'}`,
              ...data,
              onRetry: onRetry ? '{...}' : undefined,
            },
          }}
          testPosition='bottom'
          onChange={setData}
          onGetTest={() => (
            <Box pv={50}>
              <ErrorRetry
                {...{ color: ifEmpty(color, undefined), message: ifEmpty(message, undefined), ...data }}
                onRetry={onRetry ? () => toast.info('재시도') : undefined}
              />
            </Box>
          )}
        />
      </Dev_Panel>

      <Dev_ErrorRetry_Variant />
    </Panel>
  );
};

export default Dev_ErrorRetry;
