import { useContext } from 'react';

import { ColorContext } from './context/ColorContext/colorContext';
import { Navbar } from './Components';

function App() {
  const theme = useContext(ColorContext);
  return (
    <div className='App'>
      <Navbar theme={theme} />
    </div>
  );
}

export default App;
