import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import StaffList from 'pages/StaffList'
import { Router } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router></Router>
      <MainLayout>
        <Dashboard />
        <About />
        <StaffList />
      </MainLayout>
    </div>
  )
}

export default App
