import Hostels from '../../Data/Hostels'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ICard } from '../../Elements/types'
import { useColor } from '../../Context'
import { StyledHostel } from './HostelDetails.styled'

export const HostelDetails = () => {
  const [hostel, setHostel] = useState<ICard>()
  const [img, setImg] = useState<string[]>([])
  const { hostelId } = useParams()
  const { theme } = useColor()

  const id = Number(hostelId)

  useEffect(() => {
    const hostel_: any = Hostels.find(item => {
      return item.hostelId === id
    })
    setHostel(hostel_)
    setImg(hostel_.img)
  }, [id])

  return (
    <StyledHostel theme={theme}>
      <div className="top">
        <h1>{hostel?.title}</h1>
      </div>

      <div className="images">
        <div className="left">
          <img src={`${img[0]}`} alt={`${hostel?.title}`} />
        </div>
        <div className="right">
          <img src={`${img[1]}`} alt={`${hostel?.title}`} className="one" />
          <img src={`${img[2]}`} alt={`${hostel?.title}`} className="two" />
        </div>
      </div>

      <div className="bottom">
        <table>
          <tr>
            <th></th>
            <th></th>
            <th>Description</th>
          </tr>
        </table>
      </div>
    </StyledHostel>
  )
}

export default HostelDetails
