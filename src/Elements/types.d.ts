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

export interface ICard {
  title: string
  location: string
  img: {
    pic1: string
    pic2: string
    pic3: string
  }
  price: number
  deposit: number
  type: string
  remainingRooms: number
  launched: number
  rating: number
  url: string
  wifi: boolean
  commonRoom: boolean
  beds: boolean
  meals: boolean
  water: boolean
  electricity: boolean
  swimmingPool: boolean
  sharing: boolean
  noOfPeople: number
}

export interface ICardProps {
  card: ICard
}