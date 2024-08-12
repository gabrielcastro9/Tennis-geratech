import React from "react";

interface CollectionCardProps {
  title: string;
  discount: string;
  imageSrc: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  title,
  discount,
  imageSrc,
}) => {
  return (
    <div className="bg-[#D8E3F2] w-[300px] md:w-[460px] h-[200px] md:h-[260px] relative overflow-hidden rounded-lg shadow-lg">
      <div className="bg-[#E7FF86] flex font-bold top-4 md:top-8 text-dark-gray-2 justify-center p-2 absolute left-4 md:left-8 rounded-lg items-center z-10">
        {discount}
      </div>
      <h1
        className={`absolute text-dark-gray-2 top-16 md:top-20 left-4 md:left-8 md:text-4xl text-2xl w-3/5 ${
          discount == "20% OFF" && "w-0.5"
        } ${discount == "50% OFF" && "w-[210px]"} font-bold z-10`}
      >
        {title}
      </h1>
      <img
        src={imageSrc}
        className="absolute bottom-0 right-0 w-3/5 h-auto z-0"
        alt={title}
      />
      <button className="absolute bg-light-gray-3 text-primary transition hover:bg-[#adbdd3] hover:text-white px-6 font-bold py-2 md:py-4 top-36 md:top-44 left-4 md:left-8 rounded-lg">
        Comprar
      </button>
    </div>
  );
};

export default CollectionCard;
