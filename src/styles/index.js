import breakpoints from './breakpoints';
import { lightColors, darkColors } from './colors';
import dimensions from './dimensions';

const lightTheme = { ...breakpoints, ...lightColors, ...dimensions };
const darkTheme = { ...breakpoints, ...darkColors, ...dimensions };

export { lightTheme, darkTheme };
