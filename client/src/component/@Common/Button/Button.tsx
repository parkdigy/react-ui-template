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
    background-color: ${g.color.primary};
    color: #fff;

    &:hover:not([disabled]) {
      background-color: ${g.color.primaryDark};
    }
    &:focus:not([disabled]) {
      background-color: ${g.color.primaryDark};
    }
    &:active:not([disabled]) {
      background-color: ${g.color.primaryLight};
    }
  }

  &.Button_color_secondary {
    background-color: ${g.color.secondary};
    color: #fff;

    &:hover:not([disabled]) {
      background-color: ${g.color.secondaryDark};
    }
    &:focus:not([disabled]) {
      background-color: ${g.color.secondaryDark};
    }
    &:active:not([disabled]) {
      background-color: ${g.color.secondaryLight};
    }
  }

  &.Button_color_error {
    background-color: ${g.color.error};
    color: #fff;

    &:hover:not([disabled]) {
      background-color: ${g.color.errorDark};
    }
    &:focus:not([disabled]) {
      background-color: ${g.color.errorDark};
    }
    &:active:not([disabled]) {
      background-color: ${g.color.errorLight};
    }
  }

  &.Button_color_success {
    background-color: ${g.color.success};
    color: #fff;
    &:hover:not([disabled]) {
      background-color: ${g.color.successDark};
    }
    &:focus:not([disabled]) {
      background-color: ${g.color.successDark};
    }
    &:active:not([disabled]) {
      background-color: ${g.color.successLight};
    }
  }

  &.Button_color_warning {
    background-color: ${g.color.warning};
    color: #fff;
    &:hover:not([disabled]) {
      background-color: ${g.color.warningDark};
    }
    &:focus:not([disabled]) {
      background-color: ${g.color.warningDark};
    }
    &:active:not([disabled]) {
      background-color: ${g.color.warningLight};
    }
  }

  &.Button_color_info {
    background-color: ${g.color.info};
    color: #fff;
    &:hover:not([disabled]) {
      background-color: ${g.color.info};
    }
    &:focus:not([disabled]) {
      background-color: ${g.color.infoDark};
    }
    &:active:not([disabled]) {
      background-color: ${g.color.infoLight};
    }
  }

  &.Button_color_gray {
    background-color: ${g.color.gray};
    color: #fff;
    &:hover:not([disabled]) {
      background-color: ${g.color.gray};
    }
    &:focus:not([disabled]) {
      background-color: ${g.color.gray600};
    }
    &:active:not([disabled]) {
      background-color: ${g.color.gray600};
    }
  }

  &.Button_color_light {
    background-color: ${g.color.gray300};
    color: #333;
    &:hover:not([disabled]) {
      background-color: ${g.color.gray300};
    }
    &:focus:not([disabled]) {
      background-color: ${g.color.gray400};
    }
    &:active:not([disabled]) {
      background-color: ${g.color.gray400};
    }
  }
`;
