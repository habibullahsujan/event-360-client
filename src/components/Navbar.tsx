import { NavLink } from "react-router-dom";
import Container from "./Container";
import { IoMenu } from "react-icons/io5";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IoMdHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { GrContact } from "react-icons/gr";
import { motion } from "framer-motion";
const Navbar = () => {
  
  const [open, setOpen] = useState(false);
  return (
    <Container className=" bg-[#02011B] text-white fixed w-full z-50">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delayChildren: 1 },
        }} className="py-[24px] flex items-center justify-between ">
        <h1 className="text-3xl font-bold">
          Event <span className="linear-gradient-text">360</span>
        </h1>
        <div className="md:flex items-center justify-center gap-4 text-[16px] hidden">
          <motion.a whileHover={{ scale: 1.2 }}>
            <NavLink to={"/"}>Home</NavLink>
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }}>
            <NavLink to={"/about"}>About</NavLink>
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }}>
            {" "}
            <NavLink to={"/contact"}>Contact</NavLink>
          </motion.a>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button onClick={() => setOpen(!open)} className="md:hidden block">
              <IoMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full p-4 bg-[#02011B] text-white">
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <div className="flex flex-col gap-y-4">
                <NavLink to={"/"} className="flex items-center gap-x-1">
                  <IoMdHome />
                  Home
                </NavLink>
                <NavLink to={"/about"} className="flex items-center gap-x-1 ">
                  <FcAbout className="text-black" />
                  About
                </NavLink>
                <NavLink to={"/contact"} className="flex items-center gap-x-1 ">
                  <GrContact />
                  Contact
                </NavLink>
              </div>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </Container>
  );
};

export default Navbar;
