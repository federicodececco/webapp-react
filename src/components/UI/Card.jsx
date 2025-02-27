import { useNavigate } from 'react-router'

import MoreButton from './MoreButton'
export default function Card({ movie }) {
  const navigate = useNavigate()
  const handleNav = () => {
    navigate(`/Detail/${movie.id}`)
  }
  return (
    <>
      <div className='my-4 h-90 rounded-md bg-slate-200 shadow-md'>
        <div className='flex h-3/4 justify-center'>
          <img className='max-h-full' src={`/${movie.image}`} alt='' />
        </div>
        <div>
          <h1 className='pt-3 text-center text-xl'>{movie.title}</h1>
        </div>
        <div className='pt-1 text-center'>
          <MoreButton click={handleNav}>more...</MoreButton>
        </div>
      </div>
    </>
  )
}
