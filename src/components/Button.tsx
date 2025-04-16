import React from "react";
import clsx from "clsx";

interface IButtonProps {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<IButtonProps> = ({ variant = "primary", disabled = false, children, onClick }) => {
  const baseStyles = "h-12 px-[2.125rem] py-3 rounded-lg text-center text-sm font-medium transition-all duration-150 cursor-pointer";

  const variants = {
    primary: clsx(
      "text-white",
      disabled
        ? "bg-disabled"
        : "bg-secondary-300 hover:bg-secondary-100 focus:ring-2 focus:ring-secondary-800 active:bg-secondary-600 active:ring-0"
    ),
    secondary: clsx(
      "text-black",
      disabled
        ? "text-disabled-text ring-2 ring-base-300"
        : "bg-white ring-2 ring-base-300 hover:ring-secondary-300 focus:ring-secondary-300 focus:text-secondary-300 active:text-secondary-1000 active:ring-secondary-1000"
    ),
  };

  return (
    <button className={clsx(baseStyles, variants[variant])} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
