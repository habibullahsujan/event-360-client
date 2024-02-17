import CheckBoxComponent from "../CheckBoxComponent";
import Container from "../Container";
import image1 from "@/assets/Picture.png";
import image2 from "@/assets/Picture (1).png";
import image3 from "@/assets/Picture (2).png";
import image4 from "@/assets/Picture (3).png";
import image5 from "@/assets/Picture (4).png";
import image6 from "@/assets/Picture (5).png";
import image7 from "@/assets/Picture (6).png";
import image8 from "@/assets/Picture (7).png";
import image9 from "@/assets/Picture (8).png";
import image10 from "@/assets/Picture (9).png";
import { motion } from "framer-motion";

const Gallery = () => {
  const eventsFacility = [
    "One day pas access all lecture",
    "Lunch and Snack",
    "Meet Event Speaker",
    "Front Seat",
    "One day pas access all lecture",
  ];
  return (
    <Container className="pt-[100px] bg-[#0F172A] text-white pb-[50px]">
      <div className="md:grid grid-cols-12 gap-x-4 block">
        <div className="col-span-6">
          <h1 className="font-bold text-4xl pb-8 pt-28">Gallery</h1>
          <p className="max-w-[55ch]">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>

          <div className="pt-8">
            <CheckBoxComponent items={eventsFacility} />
          </div>
        </div>
        <motion.div
          initial={{ scale:0.75, opacity: 0 }}
          animate={{ scale:1, opacity: 1, transition: { duration: 1 } }}
          className="col-span-6 pt-12 md:pt-0"
        >
          <div className="grid grid-cols-12">
            <div className="col-span-3 flex flex-col items-end">
              <img
                src={image1}
                alt=""
                className="h-[192px] w-[128px] pt-[60px]"
              />
              <img src={image2} alt="" className="w-[172px] h-[258px]" />
            </div>

            <div className="col-span-3 flex flex-col items-center">
              <img src={image3} alt="" className="w-[128px] h-[212px]" />
              <img src={image4} alt="" className="w-[128px] h-[215px]" />
              <img src={image5} alt="" className="w-[128px] h-[160px]" />
            </div>
            <div className="col-span-3 flex flex-col items-center">
              <img src={image6} alt="" className="w-[128px] h-[171px] pt-4" />
              <img src={image7} alt="" className="w-[128px] h-[172px]" />
              <img src={image8} alt="" className="w-[128px] h-[192px]" />
            </div>
            <div className="col-span-3 flex flex-col">
              <img src={image9} alt="" className="w-[160px] h-[255px] pt-8" />
              <img src={image10} alt="" className="w-[128px] h-[165px]" />
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Gallery;
