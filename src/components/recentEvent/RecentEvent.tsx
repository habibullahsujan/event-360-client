import Container from "../Container";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RecentEventCard from "./RecentEventCard";
import { useQuery } from "@tanstack/react-query";
import { getRecentEvents } from "@/api/admin/recentEvent.api";
import { SkeletonCard } from "../SkeletonCard";
import { TRecentEvent } from "@/types/recentEventTypes";

const RecentEvent = () => {


  const { isLoading, isError, data } = useQuery({
    queryKey: ['recentEvent'],
    queryFn: getRecentEvents
  })

  if (isLoading) {
    return (
      <Container className="bg-[#0F172A] text-white grid grid-cols-12 items-center justify-center">
      <div className="col-span-4">
        <SkeletonCard />
      </div>
      <div className="col-span-4">
        <SkeletonCard />
      </div>
      <div className="col-span-4">
        <SkeletonCard />
      </div>

    </Container>
    )
  }
  if (isError) {
    return (
      <div className="flex items-center justify-center">
        <p>Something went wrong!</p>
      </div>
    )
  }
  return (
    <Container className="bg-[#0F172A] text-white pb-[80px]">
      <div className="pt-40">
        <h1 className="font-bold text-4xl text-center py-6">Recent Events</h1>
        <p className="text-center max-w-[80ch] mx-auto pb-[80px]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <Carousel className="">
          <CarouselContent className="flex gap-x-3">
            {data?.data?.map((event:TRecentEvent, index:number) => (
              <RecentEventCard
                title={event.name}
                key={index}
                image={event.image}
                creator={event.creator}
              />
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-gray-600 hidden md:block" />
          <CarouselNext className="bg-gray-600 hidden md:block" />
        </Carousel>
      </div>
    </Container>
  );
};

export default RecentEvent;
