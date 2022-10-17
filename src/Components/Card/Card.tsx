import { ICardProps } from '../../Elements/types'
import Slider from '../Slider/Slider'
import { StyledCard } from './Card.styled'
import { GrStar } from 'react-icons/gr'
import { Link } from 'react-router-dom'

export interface ICard {
  hostel: ICardProps
}

export const Card = (props: any) => {
  const { hostel, theme } = props

  return (
    <StyledCard theme={theme}>
      <div className="imgs">
        <Slider img={hostel.img} />
      </div>

      <div className="info">
        <div className="upper">
          <div className="leftDiv">
            <h3>{hostel.title},</h3>
            <h3>{hostel.location}</h3>
          </div>

          <div className="rightDiv">
            <span>
              {`[${hostel.rating}]`}
              <GrStar />
            </span>
          </div>
        </div>

        <div className="lower">
          <p>
            Starting from Shs, <span>5000</span>
          </p>
          <Link to={`/hostel/${hostel.hostelId}`} className="link">
            More
          </Link>
        </div>
      </div>
    </StyledCard>
  )
}

export default Card
