import React from "react";
import IconButton from "./IconButton";
import LabelBadge from "./LabelBadge";

type CardProps = {
  image: string;
  title: string;
  location: string;
  price: number;
  label?: string;
};

const Card: React.FC<CardProps> = ({ image, title, location, price, label = "HOUSE" }) => {
  return (
    <div className="max-w-xs rounded-2xl shadow-sm overflow-visible relative hover:ring-1 hover:ring-base-400">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-2xl" />
        <LabelBadge label={label} />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-1">
            <p className="text-secondary-300 text-xl font-bold">${price.toLocaleString()}</p>
            <span className="text-gray opacity-50 text-sm font-medium">/month</span>
          </div>

          <IconButton />
        </div>

        <h3 className="text-base font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray opacity-50 font-medium">{location}</p>
      </div>
    </div>
  );
};

export default Card;
