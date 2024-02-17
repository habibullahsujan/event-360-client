import { CarouselItem } from "../ui/carousel";

type TRecentEventCardProps = {
  image: string;
  title: string;
  creator: string;
};
const RecentEventCard = ({ image, title, creator }: TRecentEventCardProps) => {
  return (
    <CarouselItem className="basis-1/1 bg-black bg-opacity-50 md:basis-1/2 lg:basis-1/3 p-0 rounded-md">
      <div>
       <div className="h-full w-full">
       <img src={image} alt="" className="h-[220px] w-full rounded-md"/>
       </div>
        <div className="p-4">
          <h4 className="font-semibold">{title}</h4>
          <span className="text-[#475569]">{creator}</span>
        </div>
      </div>
    </CarouselItem>
  );
};

export default RecentEventCard;
