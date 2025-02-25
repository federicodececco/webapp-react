import axios from '../api/axiosCompiled'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
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
          console.log(movie)
          return <Card movie={movie} key={movie.id} />
        })}
      </div>
    </>
  )
}
