import { Routes, Route } from 'react-router-dom'


// importing pages for general website 
import Home from './pages/general/HomePage'
import About from './pages/general/AboutPage'
import Blogs from './pages/general/BlogsPage'
import Contact from './pages/general/ContactPage'
import Gallery from './pages/general/GalleryPage'
import Membership from './pages/general/MembershipPage'
import Programs from './pages/general/ProgramsPage'
import ErrorPage from './pages/ErrorPage'


//imports for dashboard ----supervisor
import Dashboard from './pages/supervisor/Dashboard'
import ManageClasses from './pages/supervisor/ManageClasses'
import ManageMembers from './pages/supervisor/ManageMembers'


//imports for shared pages
import Information from './pages/shared/Information'
import Settings from './pages/shared/Settings'




// importing layout
import GeneralLayout from './layouts/generalLayout'
import DashboardLayout from './layouts/DashboardLayout'

function App() {

  return (
    <>

      <Routes>

        <Route element={<GeneralLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/blogs' element={<Blogs />} />
        </Route>

        <Route path='supervisor' element={<DashboardLayout />}>
          {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
          <Route path='classes' element={<ManageClasses/>}/>
          <Route path='members' element={<ManageMembers/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='information' element={<Information/>}/>
        </Route>

        <Route path='*' element={<ErrorPage />} />

      </Routes>

    </>
  )
}

export default App
