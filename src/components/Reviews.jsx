export default function Reviews({ name, vote, text }) {
  let starArr = []
  for (let i = 0; i < 5; i++) {
    if (vote <= i) {
      starArr[i] = <i className='fa fa-star-o' aria-hidden='true'></i>
    } else starArr[i] = <i className='fa fa-star' aria-hidden='true'></i>
  }
  return (
    <div className='m-auto my-8 max-w-3xl rounded-sm bg-slate-200 p-2 pt-3 text-xl outline-yellow-400 outline-solid'>
      <div>
        <h2>{name}</h2>
        <h2 className='py-4 text-yellow-600'>{starArr}</h2>
      </div>

      <div className='border-t border-solid border-yellow-600 pt-3'>{text}</div>
    </div>
  )
}
