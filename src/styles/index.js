import breakpoints from './breakpoints';
import { lightColors, darkColors } from './colors';
import dimensions from './dimensions';

export default {
  lightTheme: Object.assign({}, breakpoints, lightColors, dimensions),
  darkTheme: Object.assign({}, breakpoints, darkColors, dimensions),
};
