import './App.css'

import { Routes, Route } from 'react-router-dom'


// importing pages for general website 
import Home from './pages/general/HomePage'
import About from './pages/general/AboutPage'
import Blogs from './pages/general/BlogsPage'
import Contact from './pages/general/ContactPage'
import ErrorPage from './pages/ErrorPage'
import Facilities from './pages/general/FacilitiesPage'
import Programs from './pages/general/ProgramsPage'
import Membership from './pages/general/MembershipPage'


//imports for dashboard ----supervisor
import Dashboard from './pages/supervisor/Dashboard'
import ManageClasses from './pages/supervisor/ManageClasses'
import ManageMembers from './pages/supervisor/ManageMembers'


//imports for shared pages
import Information from './pages/shared/Information'
import Settings from './pages/shared/Settings'




// importing layout
// import GeneralLayout from './layouts/generalLayout'
import DashboardLayout from './layouts/DashboardLayout'
import GeneralLayout from './layouts/generalLayout'

function App() {
  return (
    <>
      <Routes>

        <Route element={<GeneralLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/blogs' element={<Blogs />} />
        </Route>

        <Route path='supervisor' element={<DashboardLayout />}>
          {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
          <Route path='classes' element={<ManageClasses />} />
          <Route path='members' element={<ManageMembers />} />
          <Route path='settings' element={<Settings />} />
          <Route path='information' element={<Information />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </>
  )
}

export default App
