
import { TContainer } from "@/types";
import { cn } from "@/utils/cn";




const Container = ({ children, className }: TContainer) => {
  return (
    <div className={cn("px-[20px] w-full max-w-[1340px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
