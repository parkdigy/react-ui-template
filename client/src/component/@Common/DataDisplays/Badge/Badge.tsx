import { type BadgeProps as Props } from './Badge.types';
import { getDefaultOnColor } from '@theme';
import Color from 'color';
import './Badge.scss';

export const Badge = ({
  children,
  variant: initVariant,
  content,
  c: initC,
  color: initColor,
  bgColor: initBgColor,
  backgroundColor: initBackgroundColor,
  offset,
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const variant = initVariant ?? (content === '' ? 'dot' : 'standard');

  const finalInitColor = initColor ?? initC ?? 'error';
  const finalInitBackgroundColor = initBackgroundColor ?? initBgColor;

  const isCustomColor = finalInitBackgroundColor !== undefined;
  const isButtonColor = theme.isButtonColor(finalInitColor);
  const isDefaultColor = isButtonColor && theme.isDefaultColor(finalInitColor);

  const baseColor = isButtonColor ? theme.colors[finalInitColor] : finalInitColor;

  let color: CSSProperties['color'] | undefined;
  let backgroundColor: CSSProperties['backgroundColor'] | undefined;

  if (isCustomColor) {
    color = baseColor;
    backgroundColor = theme.isAllColor(finalInitBackgroundColor)
      ? theme.colors[finalInitBackgroundColor]
      : finalInitBackgroundColor;
  } else {
    backgroundColor = baseColor;

    if (isDefaultColor) {
      color = theme.colors[getDefaultOnColor(finalInitColor)];
    } else {
      if (Color(backgroundColor).alpha() >= 0.4) {
        color = theme.colors.background;
      } else {
        color = theme.colors.text;
      }
    }
  }
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div className='Badge'>
      <div className='Badge__Inner'>
        {children}
        {content !== undefined && (
          <div
            className={`Badge__Content Badge__Content-${variant}`}
            style={
              {
                '--Badge__Content-color': color,
                '--Badge__Content-background-color': backgroundColor,
                '--Badge__Content-offset-x': `${offset?.x ?? 0}px`,
                '--Badge__Content-offset-y': `${offset?.y ?? 0}px`,
              } as CSSProperties
            }
          >
            {variant === 'standard' ? content : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Badge;
