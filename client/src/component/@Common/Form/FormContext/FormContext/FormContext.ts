import { createContext } from 'react';
import { type FormContextValue } from './FormContext.types';

const FormContext = createContext<FormContextValue>({} as any);

export default FormContext;
