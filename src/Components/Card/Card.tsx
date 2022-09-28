import { ICardProps } from '../../Elements/types'
import Slider from '../Slider/Slider'

// Create an interface for the props
export interface ICard {
  hostel: ICardProps
}

export const Card = (props: any) => {
  const { name, address, price, rating, image, img } = props.hostel

  return (
    <div>
      <Slider img={img} />
    </div>
  )
}

export default Card
