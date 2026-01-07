import { type FormContextProviderProps as Props } from './FormContextProvider.types';
import FormContext from './FormContext';

const FormContextProvider = ({ children, value }: Props) => {
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
