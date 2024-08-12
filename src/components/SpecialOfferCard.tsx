import React from "react";
import CustomButton from "./CustomButton";

const SpecialOfferCard: React.FC = () => {
  return (
    <div className="flex flex-col  md:flex-row py-16 justify-center items-center rounded-lg ">
      <div className="flex justify-center md:basis-1/2 mb-4 md:mb-0">
        <img
          src="offer_special.svg"
          alt="Oferta Especial"
          className="md:w-[700px]"
        />
      </div>
      <div className="flex flex-col md:ml-12 md:basis-1/2 md:pr-[200px]">
        <p className="text-warning md:text-primary font-bold">
          Oferta especial
        </p>
        <h1 className="text-dark-gray-2 text-2xl md:text-5xl md:w-[500px] font-bold my-2">
          Air Jordan edição de colecionador
        </h1>
        <p className="text-dark-gray-2 mb-4 mb:w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>
        <div className="">
          <CustomButton classname="bg-primary  hover:bg-[#b33672]">
            Ver Oferta
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferCard;
