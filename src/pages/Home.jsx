import axios from '../api/axiosCompiled'
import { useEffect, useState } from 'react'
import Card from '../components/UI/Card'
import React from 'react'
export default function Home() {
  const [movies, setMovies] = useState([])
  const fetchMovies = () => {
    axios.get('/movies').then(res => {
      setMovies(res.data)
    })
  }
  useEffect(fetchMovies, [])
  return (
    <>
      <div className='mx-auto grid max-w-3xl grid-cols-3 gap-6'>
        {movies.map(movie => {
          return <Card movie={movie} key={movie.id} />
        })}
      </div>
    </>
  )
}
