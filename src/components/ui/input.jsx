import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <div className="flex flex-row">
      <input
        type={type}
        className={cn(
          `flex h-9 pr-12 pl-4 bg-no-repeat bg-[position:95%] bg-[length:1.5rem] w-full text-color-2 peer placeholder:text-color-2 border-white border-b-2  bg-transparent py-1 text-md shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:rounded-lg transition-all disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
