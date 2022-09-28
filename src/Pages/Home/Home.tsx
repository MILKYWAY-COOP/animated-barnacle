import { Card } from '../../Components'
import Hostels from '../../Data/Hostels'

export const Home = () => {
  // map through the hostels and render a card for each hostel
  return (
    <div>
      {Hostels.map(hostel => (
        <Card key={hostel.hostelId} hostel={hostel} />
      ))}
    </div>
  )
}

export default Home
