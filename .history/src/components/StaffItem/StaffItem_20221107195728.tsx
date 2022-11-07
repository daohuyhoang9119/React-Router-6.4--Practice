import { Routes, Route, useParams } from 'react-router-dom'
export default function StaffItem() {
  let { id } = useParams()
  return <div>StaffItem {id}</div>
}
