import axios from '../api/axiosCompiled'
import { useEffect, useState } from 'react'
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
      <div>
        <h1>ciao</h1>
        {movies.map(movie => {
          return <div key={movie.id}>{movie.title}</div>
        })}
      </div>
    </>
  )
}
