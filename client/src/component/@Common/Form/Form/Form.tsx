import React, { FormEvent } from 'react';
import { FormCommands, FormProps as Props } from './Form.types';
import { FormContextProvider, FormContextValue, FormControlType } from '../FormContext';
import { FormControlCommands } from '../FormControls/@common';
import { FormCheckboxCommands, FormFileCommands, FormTextCommands } from '../FormControls';
import { useForwardRef } from '@pdg/react-hook';
import { FormRadioGroupCommands } from '../FormControls/FormRadioGroup';
import { FormSelectCommands } from '../FormControls/FormSelect';
import './Form.scss';

export const Form = React.forwardRef<FormCommands, Props>(
  (
    {
      titlePosition = 'top',
      titleWidth = 100,
      hideTitle = false,
      disabled = false,
      focusName,
      onSubmit,
      // FlexProps
      className,
      children,
      ...stackProps
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const innerRef = useRef<HTMLFormElement>(null);
    const formControls = useRef<Dict<{ type: FormControlType; commands: FormControlCommands | null; active: boolean }>>(
      {}
    );

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const submit = useCallback(() => {
      const finalValues: Dict<string | number | undefined | boolean | File> = {};
      let isAllValid = true;

      for (const name of keys(formControls.current)) {
        const { active, type, commands } = formControls.current[name];

        if (active && commands) {
          if (commands.validate()) {
            let value: string | number | boolean | File | undefined;

            switch (type) {
              case 'text':
              case 'email':
              case 'url':
              case 'password':
              case 'textarea':
              case 'hidden':
              case 'tel':
                value = (commands as FormTextCommands).getValue();
                break;
              case 'file':
                value = (commands as FormFileCommands).getFile();
                break;
              case 'checkbox':
                value = (commands as FormCheckboxCommands).getChecked();
                break;
              case 'radio_group':
                value = (commands as FormRadioGroupCommands<any>).getValue();
                break;
              case 'select':
                value = (commands as FormSelectCommands<any>).getValue();
                break;
              default:
                throw new Error('Unknown form control type');
            }

            finalValues[name] = value;
          } else {
            if (isAllValid) {
              commands.focus();
              isAllValid = false;
            }
          }
        }
      }

      if (isAllValid) {
        onSubmit?.(finalValues, innerRef.current!);
      }
    }, [onSubmit]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleSubmit = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        submit();
      },
      [submit]
    );

    const getControlCommands = useCallback(function <T extends FormControlCommands>(name: string) {
      return ifNull(formControls.current[name]?.commands, undefined) as T | undefined;
    }, []);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    useForwardRef(
      ref,
      useMemo<FormCommands>(
        () => ({
          submit,
          focus(name: string) {
            getControlCommands(name)?.focus();
          },
          getControlCommands,
        }),
        [getControlCommands, submit]
      )
    );
    /********************************************************************************************************************
     * Context
     * ******************************************************************************************************************/

    const contextValue = useMemo<FormContextValue>(
      () => ({
        titlePosition,
        titleWidth,
        hideTitle,
        disabled,
        addControl(type: FormControlType, name: string, commands: FormControlCommands | null) {
          if (commands && !formControls.current[name]?.commands) {
            if (name === focusName) {
              nextTick(() => {
                commands.focus();
              });
            }
          }
          formControls.current[name] = { type, commands, active: true };
        },
        removeControl(name: string) {
          if (formControls.current[name]) {
            formControls.current[name].active = false;
          }
        },
        getControlCommands,
      }),
      [disabled, focusName, getControlCommands, hideTitle, titlePosition, titleWidth]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormContextProvider value={contextValue}>
        <form className={classnames(className, 'Form')} ref={innerRef} method='post' noValidate onSubmit={handleSubmit}>
          <Flex {...stackProps}>{children}</Flex>
        </form>
      </FormContextProvider>
    );
  }
);

export default Form;
