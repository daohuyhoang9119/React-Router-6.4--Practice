import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import StaffList from 'pages/StaffList'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* <Route path="/">
          <Dashboard />
        </Route> */}
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/stafflist'>
          <StaffList />
        </Route>
        <Route path='/'>
          <Dashboard />
        </Route>
      </Routes>
      <MainLayout>
        {/* <Dashboard/>
        <About />
        <StaffList /> */}
      </MainLayout>
    </div>
  )
}

export default App
