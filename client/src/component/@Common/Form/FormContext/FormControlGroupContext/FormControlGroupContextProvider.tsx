import { type FormControlGroupContextProviderProps as Props } from './FormControlGroupContextProvider.types';
import FormControlGroupContext from './FormControlGroupContext';

const FormControlGroupContextProvider = ({ children, value }: Props) => {
  return <FormControlGroupContext.Provider value={value}>{children}</FormControlGroupContext.Provider>;
};

export default FormControlGroupContextProvider;
