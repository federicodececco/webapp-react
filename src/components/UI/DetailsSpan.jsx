export default function DetailsSpan({ value }) {
  return (
    <li className='py-2'>
      <h2 className='text-xl font-bold'>
        {value.name}:
        <span className='text-md pl-1 font-normal'>{value.nameValue}</span>
      </h2>
    </li>
  )
}
