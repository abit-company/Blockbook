const baseColor = {
  grey: '#eee',
  mainColor: '#7682ff',
  mainDark: '#2c3e50',
  lineColor: '#eee',
  importantColor: '#7682ff',
  alwaysDark: '#2c3e50',
  citColor: '#ffc400',
};

const lightTheme = {
  backgroundColor: '#fff',
  baseTextColor: '#2c3e50',
  inverseTextColor: '#eee',
  panelBackgroundColor: '#fafafa',
  popUpColor: '#2c3e50',
};

const darkTheme = {
  backgroundColor: '#424242',
  baseTextColor: '#eee',
  panelBackgroundColor: '#616161',
  inverseTextColor: '#2c3e50',
  lightColor: '#eee',
  popUpColor: '#eee',
};

const lightColors = { ...baseColor, ...lightTheme };
const darkColors = { ...baseColor, ...darkTheme };

export { lightColors, darkColors };
