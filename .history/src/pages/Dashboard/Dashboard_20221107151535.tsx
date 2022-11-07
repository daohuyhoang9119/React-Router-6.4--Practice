import { BrowserRouter as Link } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>
        <Link to='/'>Dashboard</Link>
      </h1>
    </div>
  )
}
