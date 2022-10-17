import { Card } from '../../Components'
import Hostels from '../../Data/Hostels'
import { ColorContext } from '../../Context'
import { useContext } from 'react'
import { StyledHome } from './Home.styled'

export const Home = () => {
  const theme = useContext(ColorContext)
  // map through the hostels and render a card for each hostel

  const hostel = Hostels.map((hostel, key) => {
    return <Card hostel={hostel} key={key} theme={theme} />
  })
  return <StyledHome>{hostel}</StyledHome>
}

export default Home
