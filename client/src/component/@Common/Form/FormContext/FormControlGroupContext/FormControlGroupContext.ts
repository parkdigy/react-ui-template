import { createContext } from 'react';
import { type FormControlGroupContextValue } from './FormControlGroupContext.types';

const FormControlGroupContext = createContext<FormControlGroupContextValue>({} as any);

export default FormControlGroupContext;
