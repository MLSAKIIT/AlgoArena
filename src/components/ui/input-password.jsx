import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PasswordInput = React.forwardRef(
  ({ showPassword, className, type, ...props }, ref) => {
    return (
      <div className="flex relative flex-row">
        <input
          type={type}
          className={cn(
            `flex h-9 pr-12 pl-4 w-full text-color-2 peer placeholder:white  border-white border-b-2  bg-transparent py-1 text-md shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:rounded-lg transition-all disabled:cursor-not-allowed disabled:opacity-50 focus:text-white`
          )}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={showPassword}
          className="absolute z-20 bottom-0 top-0 right-4"
        >
          <Image
            src="/assets/auth/eye.svg"
            alt="show-password"
            height={24}
            width={24}
          />
        </button>
      </div>
    );
  }
);
PasswordInput.displayName = "Input";

export { PasswordInput };
