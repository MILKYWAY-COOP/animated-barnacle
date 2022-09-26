import { ColorContext } from '../../Context/ColorContext/colorContext';
import { StyledSearch } from './Search.styled';
import { FaSearch } from 'react-icons/fa';
import { useContext } from 'react';

const Search = () => {
  const theme = useContext(ColorContext);
  return (
    <StyledSearch theme={theme}>
      <select>
        <option value='1'>Place</option>
        <option value='2'>Mwangaza</option>
        <option value='3'>Area 4</option>
        <option value='4'>VM</option>
        <option value='5'>Catholic</option>
      </select>
      <select>
        <option value='1'>$$$</option>
        <option value='2'> Below 3000</option>
        <option value='3'>3000 - 4000</option>
        <option value='4'>4000 - 5000</option>
        <option value='4'>5000 - 6000</option>
        <option value='4'>6000 - 7000</option>
        <option value='4'>Above 7000</option>
      </select>
      <select>
        <option value='0'>Type</option>
        <option value='1'>Bed Sitter</option>
        <option value='2'>Single Room</option>
        <option value='3'>One Bed Room</option>
        <option value='4'>Two Bed Room</option>
      </select>
      <div className='btn'>
        <FaSearch />
      </div>
    </StyledSearch>
  );
};

export default Search;
