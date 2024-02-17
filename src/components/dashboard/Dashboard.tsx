import AdminLayout from '@/layout/AdminLayout'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'



const Dashboard = () => {

  return (
    <AdminLayout className="flex">
      <Sidebar />
      <Outlet />
    </AdminLayout>
  )
}

export default Dashboard