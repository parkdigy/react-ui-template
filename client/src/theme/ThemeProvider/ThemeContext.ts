import { createContext } from 'react';
import { Theme } from '../@types';

const ThemeContext = createContext<Theme>({} as Theme);

export default ThemeContext;
