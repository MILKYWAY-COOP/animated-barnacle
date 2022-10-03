import { ICardProps } from '../../Elements/types'
// import Slider from '../Slider/Slider'
import { StyledCard } from './Card.styled'

// Create an interface for the props
export interface ICard {
  hostel: ICardProps
}

export const Card = (props: any) => {
  // const { img } = props.hostel.data
  console.log(props.hostel)

  return <StyledCard>{/* <Slider img={img} /> */}</StyledCard>
}

export default Card
