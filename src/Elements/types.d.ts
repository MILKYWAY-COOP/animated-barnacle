export interface ITheme {
  isLogged: boolean
  setLogged: (Logged: boolean) => void
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
  IColors
  setTheme: () => void
}

export interface IUserContext {
  user: {}
  isLoggedIn: boolean
  createUser: (user: {}) => void
  logOut: () => void
  signInWithGoogle: () => void
}