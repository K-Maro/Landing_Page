import React from "react";
import IconButton from "./IconButton";
import LabelBadge from "./LabelBadge";

interface ICardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  label?: string;
  hideIcons?: boolean;
}

const Card: React.FC<ICardProps> = ({ image, title, location, price, label = "HOUSE", hideIcons = false }) => {
  return (
    <div className="w-full sm:w-80 md:max-w-xs rounded-2xl bg-white shadow-sm overflow-visible relative hover:ring-1 hover:ring-base-400">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-32 sm:h-48 object-cover rounded-t-2xl "
        />
        {hideIcons && <LabelBadge label={label} />}
      </div>

      <div className="p-3 sm:p-4 space-y-1 sm:space-y-2">
        <div className="flex items-center justify-between text-sm sm:text-base">
          <div className="flex items-center gap-1">
            <p className="text-secondary-300 text-xl sm:text-2xl font-bold">${price.toLocaleString()}</p>
            <span className="text-gray opacity-50 font-medium">/month</span>
          </div>

          {hideIcons && <IconButton />}
        </div>

        <h3 className="text-lg sm:text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-xs sm:text-sm text-gray opacity-50 font-medium">{location}</p>
      </div>
    </div>
  );
};

export default Card;
