import { BrowserRouter, Routes, Route } from 'react-router'
//layout
import DefaultLayout from './layouts/DefaultLayout'
//pages
import Home from './pages/Home'
import Detail from './pages/Detail'
import PageNotFound from './pages/PageNotFound'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path='/' element={<Home />} />
            <Route path='/Detail/:id' element={<Detail />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
