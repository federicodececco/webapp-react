import axios from '../api/axiosCompiled'
import { useState } from 'react'
import { useParams } from 'react-router'
const standard = { name: '', vote: '0', text: '' }
export default function ReviewsForm({ fetchDetails }) {
  const [formData, setFormData] = useState(standard)
  const { id } = useParams()
  {
    /*function that handle the change of the various form field
     *@param {string} fieldName - name of the field to be changed
     *@param {string} fieldValue - value to be modified
     */
  }
  const handleChange = (fieldName, fieldValue) => {
    setFormData(current => {
      return {
        ...current,
        [fieldName]: fieldValue,
      }
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)
    axios
      .post(`/movies/${id}/reviews`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(setFormData(standard), fetchDetails())
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='m-auto my-8 max-w-3xl space-y-3 rounded-sm bg-slate-200 p-2 pt-3 text-xl outline-yellow-400 outline-solid'
    >
      <input
        type='text'
        id='name'
        name='name'
        placeholder='Insert username'
        className='w-full border-b border-solid pl-2'
        value={formData.name}
        onChange={e => handleChange('name', e.target.value)}
      />
      <input
        className='w-8 border-b border-solid text-center'
        type='number'
        id='vote'
        name='vote'
        placeholder='0'
        min='0'
        max='5'
        value={formData.vote}
        onChange={e => handleChange('vote', e.target.value)}
      />
      <textarea
        name='text'
        id='text'
        placeholder='insert your review'
        rows={5}
        className='w-full border border-solid px-2'
        value={formData.text}
        onChange={e => handleChange('text', e.target.value)}
      ></textarea>
      <button type='submit'>Submit</button>
    </form>
  )
}
