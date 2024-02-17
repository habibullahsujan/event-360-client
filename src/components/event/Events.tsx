
import EventCard from "./EventCard";
import Container from "../Container";
import { getEvents } from "@/api/admin/event.api";
import { useQuery } from "@tanstack/react-query";
import { SkeletonCard } from "../SkeletonCard";
import { TEvent } from "@/types/eventTypes";
const Events = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents
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
    <Container className="pt-[100px] bg-[#0F172A] text-white md:px-8 lg:px-48">
      <div className="flex flex-col items-center pb-[54px]">
        <div className="relative">
          <h1 className="md:text-4xl font-bold text-center pb-3 text-lg z-10">Event Items</h1>

        </div>
        <p className="text-[#CBD5E1] text-center w-full md:max-w-[70ch]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>
      <div className="md:grid grid-cols-12 gap-3 block">
        {data?.data?.map((event:TEvent, index: number) => {
          return (
            <EventCard
              key={index}
              name={event.name}
              image={event.image}
              className="md:col-span-6 lg:col-span-4 bg-black bg-opacity-50 m-2 md:m-0 p-6 rounded-md"
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Events;
