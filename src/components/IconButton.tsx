import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";

const IconButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`
        cursor-pointer
        group flex items-center justify-center rounded-full
        p-2 transition-all duration-150 
        ring-base-400 ring-1
        hover:ring-secondary-100 
        focus:ring-secondary-100 focus:ring-[1.5px] focus:bg-secondary-600/20
        active:bg-secondary-300 active:ring-[1.5px]
      `}
    >
      <IoIosHeartEmpty
        className={`
          h-5 w-5 
          text-secondary-300
          group-hover:text-secondary-600
          group-focus:text-secondary-600 
          group-active:text-white
        `}
      />
    </button>
  );
};

export default IconButton;
