import Navbar from "@/components/Navbar"
import Footer from "@/components/footer/Footer"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <div className="">
        <Navbar/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default HomeLayout