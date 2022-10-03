import { ICardProps } from '../../Elements/types'
import Slider from '../Slider/Slider'
import { StyledCard } from './Card.styled'

export interface ICard {
  hostel: ICardProps
}

export const Card = (props: any) => {
  const { hostel } = props

  return (
    <StyledCard>
      <div className='imgs'>
        <Slider img={hostel.img} />
      </div>
      <div>
        <div>
          <div>
            <h3>{hostel.title},</h3>
            <h3>{hostel.location}</h3>
          </div>
          <div>
            <span>{hostel.rating}</span>
          </div>
        </div>
        <div>
          <p>
            Starting from Shs,<span>5000</span>
          </p>
        </div>
      </div>
    </StyledCard>
  )
}

export default Card
