import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CustomButton from "../CustomButton.tsx";

const pages = [
  {
    title: "Queima de estoque Nike 🔥",
    description:
      "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    buttonText: "Ver Ofertas",
    imgSrc: "tenis.svg",
  },
  {
    title: "Ofertas exclusivas de verão 🔥",
    description:
      "Aproveite as melhores ofertas para renovar o seu guarda-roupa com estilo.",
    buttonText: "Ver Agora",
    imgSrc: "tenis.svg",
  },
];

const Carousel: React.FC = () => {
  return (
    <div className="relative w-full">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        style={
          {
            "--swiper-pagination-color": "#c92071",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          } as never
        }
      >
        {pages.map((page, index) => (
          <SwiperSlide key={index}>
            <div className="cursor-pointer flex flex-col md:flex-row justify-evenly bg-[#F5F5F5] w-full md:px-28">
              <div className="order-2 md:order-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h2 className="text-warning font-bold">
                  Melhores ofertas personalizadas
                </h2>
                <h1 className="text-3xl  md:text-6xl py-4 font-bold w-full md:w-[510px]">
                  {page.title}
                </h1>
                <p className="text-lg md:text-xl w-full md:w-[480px] text-dark-gray-2">
                  {page.description}
                </p>
                <div className="pt-8">
                  <CustomButton classname="bg-primary mb-12 md:mb-0 hover:bg-[#b33672]">
                    {page.buttonText}
                  </CustomButton>
                </div>
              </div>
              <div className="order-1 md:order-2 mb-4 md:mb-0">
                <img
                  className="w-full md:w-auto"
                  src={page.imgSrc}
                  alt={page.title}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
