import { ReactNode } from "react";
import CheckBoxComponent from "../CheckBoxComponent";

type TServiesCard = {
  title: string;
  className?: string;
  description?: string;
  children?: ReactNode;
  image?: string;
  items?:string[]
};
const ServiceCard = ({
  title,
  className,
  description,
  children,
  image,
  items
}: TServiesCard) => {
  return (
    <div className={className}>
      {image && <img src={image} alt={title} className="rounded-md" />}
      <h2 className="font-bold text-xl pt-[24px] pb-[12px]">{title}</h2>
      {description && <p className="text-[#CBD5E1] pb-[33px]">{description}</p>}
      
      {items && <CheckBoxComponent items={items}/>}
      {children && <div className="flex justify-center py-8 ">{children}</div>}
    </div>
  );
};

export default ServiceCard;
