import { type NumberTextProps as Props } from './NumberText.types';

export const NumberText = ({
  value: initValue,
  children,
  prefix,
  prefixProps,
  suffix,
  suffixProps,
  ...props
}: Props) => {
  const value = initValue ?? children;

  return (
    <T {...props}>
      {prefix && (
        <>
          <T {...prefixProps}>{prefix}</T>
          <T fontSize='0.2em'>&nbsp;</T>
        </>
      )}
      {value !== undefined && g.format.number(value)}
      {suffix && (
        <>
          <T fontSize='0.2em'>&nbsp;</T>
          <T {...suffixProps}>{suffix}</T>
        </>
      )}
    </T>
  );
};

export default NumberText;
