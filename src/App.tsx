import { ReactNode } from 'react'
import { Navbar } from './Components'
import { AuthRoutes, ROUTES } from './Routes'

import { useData } from './Context'

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

function App() {
  const { isLoggedIn } = useData()
  return <Wrapper>{isLoggedIn ? <ROUTES /> : <AuthRoutes />}</Wrapper>
}

export default App