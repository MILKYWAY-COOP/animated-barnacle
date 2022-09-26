import { useState, createContext } from 'react';

import { Colors, IColors, ITheme } from '../../Data/Colors';

export const ColorContext = createContext<IColors | null>(null);

// create an interface for the children
interface Props {
  children: React.ReactNode;
}


export const ColorProvider = ({ children }: Props) => {
  const { lightTheme, darkTheme } = Colors;
  const [theme, setTheme] = useState<IColors>(darkTheme);

  return (
    <ColorContext.Provider value={theme}>{children}</ColorContext.Provider>
  );
};
