import { Card } from '../../Components'
import Hostels from '../../Data/Hostels'
import { useColor } from '../../Context'
import { StyledHome } from './Home.styled'

export const Home = () => {
  const { theme } = useColor()
  const hostel = Hostels.map((hostel, key) => {
    return <Card hostel={hostel} key={key} theme={theme} />
  })

  return <StyledHome theme={theme}>{hostel}</StyledHome>
}

export default Home
