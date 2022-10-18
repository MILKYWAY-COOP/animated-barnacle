import Hostels from '../../Data/Hostels'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { ICard } from '../../Elements/types'
import { ColorContext } from '../../Context'
import { StyledHostel } from './Hostel.styled'

export const HostelDetails = () => {
  const [hostel, setHostel] = useState<ICard>()
  const { hostelId } = useParams()
  const theme = useContext(ColorContext)

  const id = Number(hostelId)

  useEffect(() => {
    const hostel_: any = Hostels.find(item => {
      return item.hostelId === id
    })
    setHostel(hostel_)
  }, [id])

  return (
    <StyledHostel theme={theme}>
      <div className="top">
        <div className="title">
          <h1>{hostel?.title}</h1>
        </div>
        <div className="est">
          <h1>
            Established: <i>{hostel?.launched}</i>
          </h1>
        </div>
      </div>
      <div className="images">
        <div className="left">
          <img src={`${hostel?.img?.pic2}`} alt="hostel" />
        </div>
        <div className="right">
          <img src={`${hostel?.img?.pic1}`} alt="hostel" />
          <img src={`${hostel?.img?.pic3}`} alt="hostel" />
        </div>
      </div>
    </StyledHostel>
  )
}

export default HostelDetails
