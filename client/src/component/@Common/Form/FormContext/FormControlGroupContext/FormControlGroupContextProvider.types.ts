import { type FormControlGroupContextValue } from './FormControlGroupContext.types';

export interface FormControlGroupContextProviderProps {
  value: FormControlGroupContextValue;
  children: ReactNode | null;
}
