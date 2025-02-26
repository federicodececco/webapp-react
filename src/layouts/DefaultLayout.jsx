import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function DefaultLayout() {
  return (
    <>
      <div className=''>
        <div className=''>
          <div className='h-1/8'>
            <Header />
          </div>
          <main>
            <Outlet />
          </main>
          <div className='h-1/6'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
