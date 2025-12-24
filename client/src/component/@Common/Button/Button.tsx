/********************************************************************************************************************
 * Box 컴포넌트
 * ******************************************************************************************************************/

import React from 'react';
import { ButtonProps as Props } from './Button.types';

const Button = ({ color, fullWidth, className: initClassName, size, ...props }: Props) => {
  const className = useMemo(
    () =>
      classnames(
        initClassName,
        `Button_color_${color || 'primary'}`,
        `Button_size_${size}`,
        !!fullWidth && 'Button_full_width'
      ),
    [color, fullWidth, initClassName, size]
  );

  return <StyledButton className={className} {...props} />;
};

export default Button;

const StyledButton = styled('button')`
  border: 0;
  padding: 10px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  white-space: nowrap;

  &.Button_full_width {
    width: 100%;
  }

  &.Button_size_small {
    padding: 6px 10px 5px;
    font-size: 12px;
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    opacity: 0.4;
  }

  &.Button_color_primary {
    background-color: ${gColor.primary};
    color: #fff;

    &:hover:not([disabled]) {
      background-color: ${gColor.primaryDark};
    }
    &:focus:not([disabled]) {
      background-color: ${gColor.primaryDark};
    }
    &:active:not([disabled]) {
      background-color: ${gColor.primaryLight};
    }
  }

  &.Button_color_secondary {
    background-color: ${gColor.secondary};
    color: #fff;

    &:hover:not([disabled]) {
      background-color: ${gColor.secondaryDark};
    }
    &:focus:not([disabled]) {
      background-color: ${gColor.secondaryDark};
    }
    &:active:not([disabled]) {
      background-color: ${gColor.secondaryLight};
    }
  }

  &.Button_color_error {
    background-color: ${gColor.error};
    color: #fff;

    &:hover:not([disabled]) {
      background-color: ${gColor.errorDark};
    }
    &:focus:not([disabled]) {
      background-color: ${gColor.errorDark};
    }
    &:active:not([disabled]) {
      background-color: ${gColor.errorLight};
    }
  }

  &.Button_color_success {
    background-color: ${gColor.success};
    color: #fff;
    &:hover:not([disabled]) {
      background-color: ${gColor.successDark};
    }
    &:focus:not([disabled]) {
      background-color: ${gColor.successDark};
    }
    &:active:not([disabled]) {
      background-color: ${gColor.successLight};
    }
  }

  &.Button_color_warning {
    background-color: ${gColor.warning};
    color: #fff;
    &:hover:not([disabled]) {
      background-color: ${gColor.warningDark};
    }
    &:focus:not([disabled]) {
      background-color: ${gColor.warningDark};
    }
    &:active:not([disabled]) {
      background-color: ${gColor.warningLight};
    }
  }

  &.Button_color_info {
    background-color: ${gColor.info};
    color: #fff;
    &:hover:not([disabled]) {
      background-color: ${gColor.info};
    }
    &:focus:not([disabled]) {
      background-color: ${gColor.infoDark};
    }
    &:active:not([disabled]) {
      background-color: ${gColor.infoLight};
    }
  }

  &.Button_color_gray {
    background-color: ${gColor.gray};
    color: #fff;
    &:hover:not([disabled]) {
      background-color: ${gColor.gray};
    }
    &:focus:not([disabled]) {
      background-color: ${gColor.gray600};
    }
    &:active:not([disabled]) {
      background-color: ${gColor.gray600};
    }
  }

  &.Button_color_light {
    background-color: ${gColor.gray300};
    color: #333;
    &:hover:not([disabled]) {
      background-color: ${gColor.gray300};
    }
    &:focus:not([disabled]) {
      background-color: ${gColor.gray400};
    }
    &:active:not([disabled]) {
      background-color: ${gColor.gray400};
    }
  }
`;
