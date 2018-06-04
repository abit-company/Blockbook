const baseColor = {
  grey: '#eee',
  mainColor: '#3bd0d6',
  mainDark: '#2c3e50',
  lineColor: '#eee',
  importantColor: '#3bd0d6',
  alwaysDark: '#2c3e50',
  citColor: '#ffc400',
};

const lightTheme = {
  backgroundColor: '#fff',
  baseTextColor: '#2c3e50',
  inverseTextColor: '#eee',
  panelBackgroundColor: '#fafafa',
};

const darkTheme = {
  backgroundColor: '#424242',
  baseTextColor: '#eee',
  panelBackgroundColor: '#616161',
  inverseTextColor: '#2c3e50',
  lightColor: '#eee',
};

export default {
  lightColors: Object.assign({}, baseColor, lightTheme),
  darkColors: Object.assign({}, baseColor, darkTheme),
};
