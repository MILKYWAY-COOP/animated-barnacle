import { ICardProps } from '../../Elements/types'
import Slider from '../Slider/Slider'
import { StyledCard } from './Card.styled'

// Create an interface for the props
export interface ICard {
  hostel: ICardProps
}

export const Card = (props: any) => {
  //loop through each hostel and console.log the img array

  return (
    <StyledCard>
      <Slider img={props.hostel.img} />
    </StyledCard>
  )
}

export default Card
