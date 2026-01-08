import FormContext from './FormContext';
import { type FormContextValue } from './FormContext.types';

export const useFormState = (): FormContextValue => {
  const value = useContext(FormContext);
  if (empty(value)) {
    throw new Error('useFormState should be used within FormContext.Provider');
  }
  return value;
};

export default useFormState;
