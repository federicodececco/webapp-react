export default function DetailsButton({ children, click }) {
  return (
    <>
      <button
        onClick={click}
        className='w-full rounded-sm bg-slate-300 px-3 py-1 text-lg hover:cursor-pointer'
      >
        {children}
      </button>
    </>
  )
}
