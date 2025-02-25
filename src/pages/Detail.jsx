import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from '../api/axiosCompiled'
export default function Detail() {
  const [details, setDetails] = useState([])
  const { id } = useParams()
  const fetchDetails = () => {
    axios.get(`/movies/${id}`).then(res => {
      setDetails(res.data)
    })
  }
  useEffect(fetchDetails, [])
  return (
    <div>
      title:{details.title}
      <ul>
        <li>director:{details.director}</li>
        <li>genre:{details.genre}</li>
        <li>abstract:{details.abstract}</li>
        <li>{details.image}</li>
      </ul>
    </div>
  )
}
