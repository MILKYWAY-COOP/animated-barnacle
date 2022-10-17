import Hostels from '../../Data/Hostels'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const HostelDetails = () => {
  const [hostel, setHostel] = useState({})
  const { hostelId } = useParams()

  const id = Number(hostelId)

  useEffect(() => {
    const hostel_: any = Hostels.find(item => {
      return item.hostelId === id
    })
    setHostel(hostel_)
  }, [id])

  console.log(hostel)

  return <div>HostelDetails</div>
}

export default HostelDetails
