import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from '../api/axiosCompiled'
import { useNavigate } from 'react-router'

import DetailsButton from '../components/UI/DetailsButton'
import DetailsSpan from '../components/UI/DetailsSpan'
import Reviews from '../components/Reviews'
export default function Detail() {
  const [details, setDetails] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  const arr = [1, 2, 3, 4, 5, 6]

  {
    /*function that uses id and setDetails
     *to fetch from the server details about a film
     */
  }
  const fetchDetails = () => {
    axios.get(`/movies/${id}`).then(res => {
      setDetails(res.data)
    })
  }

  {
    /*function that navigate towards the next film
     */
  }
  const navNext = () => {
    let newId = parseInt(id) + 1
    if (newId > 5) {
      return
    }
    navigate(`/Detail/${newId}`)
  }
  {
    /*function that navigate towards the previous film
     */
  }
  const navPrev = () => {
    let newId = parseInt(id) - 1
    if (newId < 1) {
      return
    }
    navigate(`/Detail/${newId}`)
  }
  {
    /*function that navigate towards the home page
     */
  }
  const navBack = () => {
    navigate('/')
  }
  useEffect(fetchDetails, [id])
  return (
    <>
      <div className='m-auto grid max-w-3xl grid-cols-2 rounded-lg shadow-md'>
        <div className='bg-slate-200'>Image Placeholder</div>
        <div className='rounded-r-lg bg-slate-100 px-3 py-4'>
          <div className='text-center'>
            <h1 className='pb-3 text-3xl font-extrabold'>{details.title}</h1>
          </div>
          <div>
            <ul>
              <DetailsSpan
                value={{ name: 'director', nameValue: details.director }}
              />
              <DetailsSpan
                value={{ name: 'genre', nameValue: details.genre }}
              />
              <DetailsSpan
                value={{ name: 'year', nameValue: details.release_year }}
              />
              <DetailsSpan
                value={{ name: 'abstract', nameValue: details.abstract }}
              />
            </ul>
          </div>
        </div>
      </div>
      <div className='mx-auto my-8 max-w-xl text-center'>
        <div className='grid grid-cols-11'>
          <div className='col-start-2 col-end-4'>
            <DetailsButton click={navPrev}>previous</DetailsButton>
          </div>
          <div className='col-start-5 col-end-8'>
            <DetailsButton click={navBack}>back</DetailsButton>
          </div>
          <div className='col-start-9 col-end-11'>
            <DetailsButton click={navNext}>next</DetailsButton>
          </div>
        </div>
      </div>
      <div>
        <div className='m-auto my-3 max-w-3xl rounded-sm bg-slate-200 p-2 text-xl outline-yellow-400 outline-solid'>
          <div>
            <h2>Name</h2>
            <h2>Vote</h2>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non
            asperiores deleniti temporibus ratione laborum, porro quia at sunt
            esse quas, recusandae ea omnis cupiditate consectetur.
          </div>
        </div>
        <div className='m-auto my-3 max-w-3xl rounded-sm bg-slate-200 p-2 text-xl outline-yellow-400 outline-solid'>
          <div>
            <h2>Name</h2>
            <h2>Vote</h2>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non
            asperiores deleniti temporibus ratione laborum, porro quia at sunt
            esse quas, recusandae ea omnis cupiditate consectetur.
          </div>
        </div>
        <Reviews arr={details.reviews}></Reviews>
      </div>
    </>
  )
}
