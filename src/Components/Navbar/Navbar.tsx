import { useCurrentPath } from '../../Elements'
import { StyledNavbar } from './Navbar.styled'
import { StyledMobile } from './Mobile.styled'
import { useNavigate } from 'react-router-dom'
import { ColorContext } from '../../context'
import Search from '../Search/Search'
import { useContext } from 'react'

const Navbar = () => {
  const theme = useContext(ColorContext)
  const path = useCurrentPath()
  const navigate = useNavigate()

  function handleClick() {
    navigate('/register')
  }

  const goHome = () => {
    navigate('/')
  }

  return (
    <>
      <StyledNavbar theme={theme}>
        <div className="logo" onClick={goHome}>
          <h1>TnC</h1>
        </div>
        <div className="search">
          {path === '/' ? <Search /> : null}
        </div>
        <div className="Landlord">
          <h1 onClick={handleClick}>Become a Landlord</h1>
        </div>
      </StyledNavbar>
      {path === '/' ? (
        <StyledMobile theme={theme}>
          <Search />
        </StyledMobile>)
      : null}
    </>
  )
}

export default Navbar
