import React from 'react';
import { Dev_FormControl_ColsProps as Props } from './Dev_FormControl_Cols.types';
import { FormCheckbox, FormRadioGroup, FormSelect, GridCols } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';
import { AllScreenAliases } from '@theme';

const _selectColsItems = new Array(12).fill(0).map((_, i) => lv(`${i + 1}개`, i + 1)) as Lv<string, GridCols>[];

const _radioGroupColsItems = [
  lv('미지정(12개)', ''),
  ...new Array(12).fill(0).map((_, i) => lv(`${i + 1}개`, i + 1)),
] as Lv<string, '' | GridCols>[];

export const Dev_FormControl_Cols = ({
  disabled,
  useResponsive,
  cols = '',
  responsiveCols,
  onChangeUseResponsive,
  onChangeCols,
  onChangeResponsiveCols,
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const screen = useScreenSize();

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const responsiveColList = useMemo(() => {
    if (useResponsive) {
      let colsOfSize: GridCols = 1;

      return objectKeys(AllScreenAliases).map((screen, idx) => {
        if (responsiveCols[screen] !== undefined) {
          colsOfSize = responsiveCols[screen];
        }
        return (
          <Col key={idx}>
            <FormSelect
              size='small'
              title={`${screen}`}
              placeholder={`${colsOfSize}개`}
              name={screen}
              items={_selectColsItems}
              clearable
              disabled={disabled}
              value={responsiveCols[screen]}
              onChange={(v) => onChangeResponsiveCols({ ...responsiveCols, [screen]: v })}
            />
          </Col>
        );
      });
    } else {
      return null;
    }
  }, [disabled, onChangeResponsiveCols, responsiveCols, useResponsive]);

  return (
    <Dev_PanelItem icon='ViewColumn' title='컬럼 수 (cols)' mt={-5}>
      <FormCheckbox
        name='isResponsiveCols'
        label='반응형 컬럼 수 사용'
        disabled={disabled}
        checked={useResponsive}
        onChange={onChangeUseResponsive}
        mb={10}
      />

      {useResponsive ? (
        <Grid
          cols={{
            mobileSm: 1,
            mobileMd: 2,
            mobileLg: 3,
            tabletSm: 4,
            tabletMd: 6,
            tabletLg: 7,
            desktopSm: 8,
            desktopMd: 9,
          }}
          gap={10}
        >
          {responsiveColList}
        </Grid>
      ) : screen.smallerThanOrEqual.tabletSm ? (
        <FormSelect
          name='cols'
          placeholder='미지정(12개)'
          disabled={disabled}
          clearable
          items={_selectColsItems}
          value={cols}
          onChange={onChangeCols}
        />
      ) : (
        <FormRadioGroup
          type='smallButton'
          name='cols'
          disabled={disabled}
          items={_radioGroupColsItems}
          value={cols}
          onChange={onChangeCols}
        />
      )}
    </Dev_PanelItem>
  );
};

export default Dev_FormControl_Cols;
