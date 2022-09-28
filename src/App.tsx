import { Navbar, StyledApp } from './Components'
import { AuthRoutes, ROUTES } from './Routes'
import { ReactNode, useContext } from 'react'
import { ColorContext } from './Context'
import { useData } from './Context'

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
  return <Wrapper>{isLoggedIn ? <AuthRoutes /> : <ROUTES />}</Wrapper>
}

export default App
