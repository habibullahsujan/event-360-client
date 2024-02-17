import { NavLink } from "react-router-dom"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

const Sidebar = () => {

  return (
    <>
      <div className="h-screen w-1/5 bg-[#02011B] hidden md:flex flex-col pt-10 p-4">
        <div className="hidden md:flex flex-col gap-y-10">
          <NavLink className=" p-2 transition-all hover:text-white linear-bg  text-lg rounded-md" to={'/admin/events'}>Events</NavLink>
          <NavLink className="p-2 transition-all hover:text-white linear-bg  text-lg rounded-md" to={'/admin/recent-event'}>Recent Event</NavLink>
          <NavLink className="p-2 transition-all hover:text-white linear-bg  text-lg rounded-md" to={'/admin/service'}>Service</NavLink>
        </div>
      </div>
      <Sheet>
        <SheetTrigger className="md:hidden bg-gray-400 flex "><MenuIcon /></SheetTrigger>
        <SheetContent side={"left"} className="flex flex-col">
          <SheetClose asChild>
            <NavLink to={'/dashboard/events'}>Events</NavLink>
          </SheetClose>
          <SheetClose asChild>
            <NavLink to={'/dashboard/recent-event'}>Recent Event</NavLink>
          </SheetClose>
          <SheetClose asChild>
            <NavLink to={'/dashboard/service'}>Service</NavLink>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Sidebar