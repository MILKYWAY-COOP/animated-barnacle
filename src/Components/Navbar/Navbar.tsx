import { ColorContext } from '../../Context/ColorContext/colorContext';
import { StyledNavbar } from './Navbar.styled';
import { StyledMobile } from './Mobile.styled';
import { useContext } from 'react';
import Search from '../Search/Search';

const Navbar = () => {
  const theme = useContext(ColorContext);
  console.log(theme);

  return (
    <>
      <StyledNavbar theme={theme}>
        <div className='logo'>
          <h1>TnC</h1>
        </div>
        <div className='search'>
          <Search />
        </div>
        <div className='Landlord'>
          <h1>Become a Landlord</h1>
        </div>
      </StyledNavbar>
      <StyledMobile theme={theme} >
        <Search />
      </StyledMobile>
    </>
  );
};

export default Navbar;
