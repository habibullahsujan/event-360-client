import { ReactNode } from "react";
import CheckBoxComponent from "../CheckBoxComponent";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion'

type TPackageCardProps = {
  className?: string;
  title: string;
  items: string[];
  button: ReactNode;
  price: string;
  index: number;
};

const PackageCard = ({
  className,
  title,
  items,
  button,
  price,
  index,
}: TPackageCardProps) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}
      className={cn(
        className,
        "flex flex-col justify-between p-2 md:px-[65px] rounded-sm bg-black bg-opacity-50 md:p-12  w-full md:w-[373px] cursor-pointer",
        index === 1 ? "bg-[#0038B4] h-full md:h-[560px] " : "h-full md:h-[530px]",

      )}
    >
      <div>
        <h4 className="uppercase">{title}</h4>
        <p className="text-4xl font-semibold py-5">{price}</p>
        {items && <CheckBoxComponent items={items} />}
      </div>
      {button && (
        <div className="block md:flex py-8 items-end justify-center">{button}</div>
      )}
    </motion.div>
  );
};

export default PackageCard;
