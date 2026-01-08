import FormControlGroupContext from './FormControlGroupContext';
import { type FormControlGroupContextValue } from './FormControlGroupContext.types';

export const useFormControlGroupState = (): FormControlGroupContextValue | undefined => {
  const value = useContext(FormControlGroupContext);
  return empty(value) ? undefined : value;
};

export default useFormControlGroupState;
