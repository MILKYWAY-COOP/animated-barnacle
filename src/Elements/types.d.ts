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
  createUser: (email: string, password: string) => void
  logOut: () => void
  signInWithGoogle: () => void
  signIn: (email: string, password: string) => void
  errorMSG: string 
}