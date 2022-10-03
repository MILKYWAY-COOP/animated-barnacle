const darkTheme = {
  mainColor: '#040348',
  secondaryColor: '#082567',
  fontColor: '#FFFFFF',
  secondaryFontColor: '#FFFDD0',
  universal1: '#FFFDD0',
  fontFamily: `'Reem Kufi Ink', sans-serif`,
}

const lightTheme = {
  mainColor: '#ADD8E6',
  secondaryColor: '#8AC7DB',
  fontColor: '#000000',
  secondaryFontColor: '#282829',
  fontFamily: `'Reem Kufi Ink', sans-serif`,
  universal1: '#FFFDD0',
}

export const Colors = {
  darkTheme,
  lightTheme,
}

// create interface for colors
export interface IColors {
  mainColor: string
  secondaryColor: string
  fontColor: string
  secondaryFontColor: string
  
}

// create interface for theme
export interface ITheme {
  darkTheme: IColors
  lightTheme: IColors
}
