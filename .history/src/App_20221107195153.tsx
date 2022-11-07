import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import StaffList from 'pages/StaffList'
import { Route, Routes } from 'react-router-dom'
import StaffItem from './components/StaffItem/StaffItem'

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff' element={<StaffList />} />
          <Route path='/staff/id' element={<StaffItem />} />
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
