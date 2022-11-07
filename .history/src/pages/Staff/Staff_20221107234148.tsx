import AddStaff from 'components/AddStaff'
import StaffList from 'components/StaffList'
import { Link, NavLink, Outlet } from 'react-router-dom'
export default function Staff() {
  return (
    <div>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to='/staff/list'
              className={(isActive) => {
                const activeColor = 'border-gray-300 text-gray-600'
                const activeted = isActive ? activeColor : ''
                return `inline-block rounded-t-lg border-b-2 ${activeted} border-transparent p-4 hover:border-blue-600 hover:text-blue-600`
              }}
            >
              List
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to='/staff/add'
              className={(isActive) => {
                const activeColor = 'border-gray-300 text-gray-600'
                const activeted = isActive ? activeColor : ''
                return `inline-block rounded-t-lg border-b-2 ${activeted} border-transparent p-4 hover:border-blue-600 hover:text-blue-600`
              }}
              aria-current='page'
            >
              Add staff
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}
