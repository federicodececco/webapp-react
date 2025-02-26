export default function MoreButton({ children, click }) {
  return (
    <>
      <button
        className='mt-2 rounded-lg bg-emerald-400 px-4 py-1'
        onClick={click}
      >
        {children}
      </button>
    </>
  )
}
