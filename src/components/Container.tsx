import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContinerProps = {
  children: ReactNode;
  className?:string
};
const Container = ({ children,className }: TContinerProps) => {
  return <div className={cn('max-w-[1440px] md:px-[80px] px-[10px] mx-auto',className)}>{children}</div>;
};

export default Container;
