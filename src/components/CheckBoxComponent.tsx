import { IoMdCheckmark } from "react-icons/io";

type TCheckBoxComponentProps = {
  items: string[];
};

const CheckBoxComponent = ({ items }: TCheckBoxComponentProps) => {

  return (
    <div className=" flex items-center">
      {/* <div className="h-5 w-5 bg-red-500 rounded-xl"></div> */}
      <div className="flex flex-col items-start gap-y-2">
        {items?.map((item, index) => (
          <div key={index} className="flex gap-x-2">
            <div className="h-5 w-5 bg-[#FFFFFF1F] flex items-center justify-center rounded-xl">
              <IoMdCheckmark className="w-4 h-4 text-[#6FCF97] bg-black rounded-xl bg-transparent" />
            </div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxComponent;
