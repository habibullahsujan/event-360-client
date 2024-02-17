import Container from "../Container";
import TestimonialCard from "./TestimonialCard";
import userImage from "@/assets/User Thumb.png";



const Testimonial = () => {

  const cardInfo = [
    {
      comment:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      image: userImage,
      name: "Hellen Jummy",
      profession: "Financial Counselor",
    },
    {
      comment:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      image: userImage,
      name: "Hellen Jummy",
      profession: "Financial Counselor",
    },
    {
      comment:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      image: userImage,
      name: "Hellen Jummy",
      profession: "Financial Counselor",
    },
  ];

  return (
    <Container className="md:pt-[100px] pt-10 bg-[#0F172A]">
      <div>
        <h1 className="font-bold md:text-6xl text-white py-8  md:py-28 text-2xl">
          What everyone says
        </h1>
        <div className="lg:flex gap-x-3 block md:flex-wrap lg:flex-nowrap">
          {cardInfo.map((item, index) => (
            <TestimonialCard
              key={index}
              comment={item.comment}
              image={item.image}
              name={item.name}
              profession={item.profession}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
