import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './layouts/Layout'
import IndexPage from './views/IndexPage'
import ServicesPage from './views/ServicesPage'
import ContactPage from './views/ContactPage'

export default function RouterApp() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<IndexPage/>} />
          <Route path='/servicios' element={<ServicesPage/>} />
          <Route path='/contacto' element={<ContactPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

