import banner1 from "@/assets/banner-1.png";
import banner2 from "@/assets/banner-2.jpg";
import Container from "./Container";
import { Button } from "./ui/button";
import CheckBoxComponent from "./CheckBoxComponent";
import {motion} from 'framer-motion'

const Header = () => {
  const corporateEvents = [
    "One day pas access all lecture",
    "Lunch and Snack",
    "Meet Event Speaker",
    "Front Seat",
  ];
  return (
    <Container className=" mg:grid lg:grid pt-[150px] grid-cols-12 gap-x-5 block pb-[68px] bg-[#02011B] text-white">
      <motion.div initial={{y:-100}} animate={{y:0,transition:{duration:1}}}  className="lg:col-span-7 md:grid-cols-12 relative">
        <img src={banner1} alt="" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 linear-gradient-header pl-10 pb-[48px]">
          <h2 className="md:text-4xl font-bold capitalize py-4 text-2xl">
            New packages for winter
          </h2>
          <p>
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
        </div>
      </motion.div>
      <motion.div initial={{y:-100}} animate={{y:0,transition:{duration:1}}} className="bg-black bg-opacity-50 lg:col-span-5 md:grid-cols-12 pt-[31px] px-[79px] text-nowrap">
        <h2 className="text-center pt-[31px] pb-[26px] text-base md:text-xl uppercase font-bold">
          Our most popular services
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="290 auto"
          height="2"
          viewBox="0 0 424 2"
          fill="none"
        >
          <path d="M0 1H424" stroke="#344E71" />
        </svg>
        <div className="flex flex-col py-[46px]">
          <img src={banner2} alt="" />
          <div className="pt-6 pb-6">
            <h2 className="pb-3 font-bold text-xl">Corporate event</h2>

            <CheckBoxComponent items={corporateEvents} />
          </div>
          <Button className="linear-bg text-[#252525] font-semibold text-base">
            View Details
          </Button>
          <div className="flex items-center justify-center py-8 gap-x-1">
            <div className="w-4 h-1 linear-bg rounded-lg"></div>
            <div className="w-1 h-1 bg-[#FFFFFF80] rounded-lg"></div>
            <div className="w-1 h-1 bg-[#FFFFFF80] rounded-lg"></div>
            <div className="w-1 h-1 bg-[#FFFFFF80] rounded-lg"></div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Header;
