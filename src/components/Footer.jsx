export default function Footer() {
  return (
    <>
      <footer className='sticky bottom-0 mt-3 w-full bg-slate-600'>
        <div className='mx-auto flex h-full max-w-3xl'>
          <section className='grid basis-1/2 grid-cols-2'>
            <div className='col-start-1'>
              <span className='text-lg text-white'>lista 1</span>
              <ul className='pl-1 text-white'>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>sed</li>
                <li>doloret</li>
              </ul>
            </div>
            <div className='col-start-2'>
              <span className='text-lg text-white'>lista 2</span>
              <ul className='pl-1 text-white'>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>sed</li>
                <li>doloret</li>
              </ul>
            </div>
          </section>
          <section className='flex basis-1/2 items-center justify-end'>
            <div className='text-white'>social Placeholder</div>
          </section>
        </div>
      </footer>
    </>
  )
}
