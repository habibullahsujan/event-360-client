import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type TEventCardProps = {
  name: string;
  image: string;
  className?: string;
};



const EventCard = ({ name, className, image }: TEventCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ opacity: opacityValues, scale: scaleValues }}
      className={cn(className, "h-full w-full")}
    >
      <div>
        <h3 className="py-3 font-bold text-lg">{name}</h3>
        <img src={image} alt="" className="h-48 w-full" />
      </div>
    </motion.div>
  );
};

export default EventCard;
