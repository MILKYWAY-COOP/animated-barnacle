import { useState, createContext, useContext } from 'react'
import { ITheme } from '../../Elements/types'

const ColorContext = createContext<ITheme>({} as ITheme)
export const useColor = () => useContext(ColorContext)

// create an interface for the children
interface Props {
  children: React.ReactNode
}

export const ColorProvider = ({ children }: Props) => {
  
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
  
  const [theme, setTheme] = useState<object>(darkTheme)

  const toggleTheme = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
  }

  return (
    <ColorContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ColorContext.Provider>
  )
}

export default ColorProvider
