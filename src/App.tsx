import { ReactNode, useContext } from 'react'
import { Navbar, StyledApp } from './Components'
import { AuthRoutes, ROUTES } from './Routes'

import { ColorContext, useData } from './Context'

const Wrapper = ({ children }: { children: ReactNode }) => {
  const theme = useContext(ColorContext)
  return (
    <>
      <Navbar />
      <StyledApp theme={theme}>{children}</StyledApp>
    </>
  )
}

function App() {
  const { isLoggedIn } = useData()
  return <Wrapper>{isLoggedIn ? <ROUTES /> : <AuthRoutes />}</Wrapper>
}

export default App
