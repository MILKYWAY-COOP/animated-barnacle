import { Card } from '../../Components'
import Hostels from '../../Data/Hostels'

export const Home = () => {
  // map through the hostels and render a card for each hostel

  const hostel = Hostels.map((hostel, key) => {
    return <Card hostel={hostel} key={key} />
  })
  return <div>{hostel}</div>
}

export default Home
