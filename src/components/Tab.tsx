import React, { useState } from "react";
import clsx from "clsx";

type TabOption = "Houses" | "Apartments";

const tabOptions: TabOption[] = ["Houses", "Apartments"];

const Tabs: React.FC = () => {
  const [selected, setSelected] = useState<TabOption>("Houses");

  return (
    <div className="inline-flex rounded-md bg-base-500/30 p-1 border border-base-300 shadow-sm gap-0.5 ">
      {tabOptions.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={clsx(
            "px-6 py-2 rounded-md font-semibold text-sm transition-all duration-200 outline-none cursor-pointer",
            selected === option
              ? "bg-white text-secondary-300 border border-base-400 hover:bg-base-500 hover:border-base-300 focus:border-secondary-300 focus:border-1 focus:bg-secondary-600/20 active:bg-base-500"
              : "text-gray-100 hover:text-secondary-300 border border-transparent"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
