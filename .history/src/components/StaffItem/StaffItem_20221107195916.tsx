import { Routes, Route, useParams } from 'react-router-dom'
export default function StaffItem() {
  let log = useParams()
  console.log(log)
  return <div>StaffItem </div>
}
