
import ServiceCard from "./ServiceCard";
import Container from "../Container";

import { useQuery } from "@tanstack/react-query";
import { getServices } from "@/api/admin/service.api";
import { SkeletonCard } from "../SkeletonCard";
import { TServices } from "@/types/serviceTypes";

const Services = () => {
  const corporateEvents = [
    "One day pas access all lecture",
    "Lunch and Snack",
    "Meet Event Speaker",
    "Front Seat",
    "One day pas access all lecture"
  ];
  const { isLoading, isError, data } = useQuery({
    queryKey: ['service'],
    queryFn: getServices
  })

  if (isLoading) {
    return (
      <Container className="bg-[#0F172A] grid grid-cols-12 items-center justify-center">
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

    <Container className="bg-[#0F172A]">
      <div className="flex flex-col justify-center items-center pt-[78px] pb-[54px]">
        <h1 className="font-bold text-4xl text-white text-center pb-3">
          Our Services
        </h1>
        <p className="text-[#CBD5E1] text-center max-w-[70ch]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>

      <div className="text-white lg:grid grid-cols-12 gap-x-5 block md:flex flex-wrap">
        {
          data?.data.map((service:TServices) => (
            <ServiceCard key={service._id}
              className="col-span-4 bg-black bg-opacity-50 p-7 m-2"
              title={service.name}
              image={service.image}
              description={service.description}
              items={corporateEvents}
            />
          ))
        }

      </div>
    </Container>

  );
};

export default Services;
