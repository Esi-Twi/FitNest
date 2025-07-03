import './App.css'
import { Routes, Route } from 'react-router-dom'

//importing components 
import Header from './components/Header'
import Footer from './components/Footer'

// importing pages for general website 
import Home from './pages/general/Home'
import About from './pages/general/About'
import Blogs from './pages/general/Blogs'
import Contact from './pages/general/Contact'
import Gallery from './pages/general/Gallery'
import Membership from './pages/general/Membership'
import Programs from './pages/general/Programs'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/programs' element={<Programs />}/>
        <Route path='/membership' element={<Membership />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='*' element={<ErrorPage />}/>

      </Routes>

      <Footer />
    </>
  )
}

export default App
