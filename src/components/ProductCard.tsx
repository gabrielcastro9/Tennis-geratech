import React from "react";
import { Link } from "react-router-dom";
import photo from "../assets/tenis_product.svg";
import tenis from "../assets/tenis_nike.svg";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  description?: string;
  cores?: string[];
  tam?: string[];
  discount?: string;
  imagesSrc: string[];
  price_old?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  category,
  price,
  discount,
  imagesSrc,
  price_old,
}) => {
  const isDynamicRoute = true;
  let displayImageSrc = isDynamicRoute ? photo : imagesSrc[0];
  displayImageSrc = imagesSrc[0] === "tenis_nike.svg" ? tenis : photo;

  return (
    <Link to={`/produtos/${id}`} className="cursor-pointer w-full mx-auto">
      <div className="relative bg-white shadow-xl py-4 px-4 sm:px-6 mb-4 rounded-md flex flex-col">
        {discount && (
          <div className="bg-[#E7FF86] flex font-bold text-xs top-3 sm:top-8 text-dark-gray-2 justify-center p-2 sm:p-3 absolute left-3 sm:left-8 rounded-3xl items-center z-10">
            {discount}
          </div>
        )}
        <img
          src={displayImageSrc}
          alt={name}
          className="w-full h-[100px] md:h-[330px] mb-4 rounded-md"
        />
      </div>
      <div className="pl-4 sm:pl-6">
        <p className="text-gray-500 text-xs sm:text-sm">{category}</p>
        <h2 className="text-xl sm:text-2xl text-dark-gray-2">{name}</h2>
        <div className="flex gap-2">
          {price_old && (
            <p className="text-base sm:text-lg text-light-gray line-through">
              ${price_old}
            </p>
          )}
          <p className="text-base sm:text-lg font-bold text-dark-gray">
            ${price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
