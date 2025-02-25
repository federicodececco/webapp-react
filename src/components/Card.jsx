import { useNavigate } from 'react-router'
export default function Card({ movie }) {
  const navigate = useNavigate()
  const handleNav = () => {
    navigate(`/Detail/${movie.id}`)
  }
  return (
    <>
      <div>
        <div>
          <h1 className='text-green'>{movie.title}</h1>
        </div>
        <div>
          <button onClick={handleNav}>details...</button>
        </div>
      </div>
    </>
  )
}
