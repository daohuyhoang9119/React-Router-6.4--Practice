import AddStaff from 'components/AddStaff'
import StaffList from 'components/StaffList'
import MainLayout from 'layouts/MainLayout'
import Page404 from 'pages/404'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import Staff from 'pages/Staff'
import { Route, Routes } from 'react-router-dom'
import StaffItem from './components/StaffItem/StaffItem'

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/staff/:id' element={<StaffItem />} />
          <Route path='/staff/add' element={<AddStaff />} />
          <Route path='/staff/list' element={<StaffList />} />
          <Route path='*' element={<Page404 />}></Route>
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
