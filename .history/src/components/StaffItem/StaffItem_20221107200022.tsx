import { Routes, Route, useParams } from 'react-router-dom'
export default function StaffItem() {
  const { id } = useParams()
  return <div>StaffItem {id}</div>
}
