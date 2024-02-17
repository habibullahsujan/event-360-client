import Container from "../Container";
import { Button } from "../ui/button";
import PackageCard from "./PackageCard";

const Package = () => {
  const packages = [
    {
      title: "standard",
      price: "$120",
      items: ["One day pas access all lecture", "Lunch and Snack"],
      button: (
        <Button className="w-full text-white font-semibold py-2 px-4">
          Get your ticket
        </Button>
      ),
    },
    {
      title: "premium",
      price: "$180",
      items: [
        "One day pas access all lecture",
        "Lunch and Snack",
        "Meet Event Speaker",
      ],
      button: (
        <Button className=" linear-bg w-full  text-black  py-2 font-semibold px-4 ">
          Get your ticket
        </Button>
      ),
    },
    {
      title: "enterprice",
      price: "$200",
      items: [
        "One day pas access all lecture",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Font Seat",
      ],
      button: (
        <Button className="w-full  text-white font-semibold py-2 px-4 ">
          Get your ticket{" "}
        </Button>
      ),
    },
  ];
  return (
    <Container className="bg-[#02011B] text-white py-[100px]">
      <div>
        <div className="text-center pb-11">
        <span className="text-center">Pricing</span>
        <h1 className="text-4xl font-bold py-6">Package Pricing</h1>
        </div>
        <div className="md:flex justify-between gap-x-4 block">
          {packages.map((pkg, index) => {
            return (
              <PackageCard
                key={index}
                items={pkg.items}
                title={pkg.title}
                button={pkg.button}
                price={pkg.price}
                className="my-6"
                index={index}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Package;
