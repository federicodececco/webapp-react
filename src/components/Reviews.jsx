export default function Reviews({ arr }) {
  return (
    <>
      {arr.map(elem => {
        return <div>{elem.name}</div>
      })}
    </>
  )
}
