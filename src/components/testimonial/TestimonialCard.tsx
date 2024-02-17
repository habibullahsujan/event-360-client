type TTestimonialCardProps = {
  comment: string;
  image: string;
  name: string;
  profession: string;
};
const TestimonialCard = ({
  comment, 
  image,
  name,
  profession,
}: TTestimonialCardProps) => {
  return (
    <div className="flex flex-col bg-black bg-opacity-50 p-8 mt-4">
      <p className="text-white">{comment}</p>
      <div className="flex gap-x-4 items-center pt-7">
        <img src={image} alt="" className="h-16 w-16 rounded-full" />
        <div>
          <h4 className="text-white">{name}</h4>
          <p className="text-gray-500">{profession}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
