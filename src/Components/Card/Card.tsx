import { ICardProps } from '../../Elements/types'
import Slider from '../Slider/Slider'
import { StyledCard } from './Card.styled'

// Create an interface for the props
export interface ICard {
  hostel: ICardProps
}

export const Card = (props: any) => {
  const { name, address, price, rating, image, img } = props.hostel

  return (
    <StyledCard>
      <Slider img={img} />
    </StyledCard>
  )
}

export default Card
