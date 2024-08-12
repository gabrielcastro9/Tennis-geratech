import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../components/ProductList/data";
import ProductList from "../components/ProductList/ProductList";
import { useCart } from "../context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomButton from "../components/CustomButton";
import tenis from "../assets/tenis_product.svg";
import tenis_nike from "../assets/tenis_nike.svg";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === parseInt(id || ""));
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      tam: selectedSize,
      selectedColor,
    });
  };

  return (
    <main className="p-6 bg-[#F5F5F5]">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            style={
              {
                "--swiper-navigation-size": "44px",
                "--swiper-navigation-top-offset": "50%",
                "--swiper-navigation-sides-offset": "10px",
                "--swiper-navigation-color": "#474747",
              } as never
            }
          >
            {product.imagesSrc.map((imageSrc, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imageSrc === "tenis_product.svg" ? tenis : tenis_nike}
                  alt={product.name}
                  className="w-3/4 h-auto mx-auto rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl md:text-4xl font-bold">{product.name}</h1>
          <p className="text-lg md:text-xl text-gray-500">{product.category}</p>

          <div className="flex gap-2 mt-4">
            {product.price_old && (
              <p className="text-lg md:text-xl text-light-gray line-through">
                ${product.price_old}
              </p>
            )}
            <p className="text-lg md:text-xl font-bold text-dark-gray">
              ${product.price}
            </p>
          </div>

          <p className="text-light-gray font-bold text-xl py-4">
            Descrição do Produto
          </p>
          <p className=" text-sm md:text-lg">{product.description}</p>

          <div className="mt-6">
            <p className="text-dark-gray-2 font-bold">Tamanhos:</p>
            <div className="flex gap-2 mt-2">
              {product.tam.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`p-2 border rounded-md ${
                    selectedSize === size
                      ? "bg-primary text-white"
                      : "bg-white text-black"
                  } border-gray-300 hover:border-primary transition`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-dark-gray-2 font-bold">Cores Disponíveis:</p>
            <div className="flex gap-2 mt-2">
              {product.cores.map((color, index) => (
                <div className="">
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full ${
                      selectedColor === color
                        ? "ring-2 border-4 ring-primary"
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>

          <CustomButton
            onClick={handleAddToCart}
            children="Comprar"
            classname="bg-[#FFB31F] hover:bg-[#e2a834] mt-6"
          />
        </div>
      </div>

      <div className="pb-6">
        <div>
          <div className="flex justify-between px-8 md:px-9">
            <h1 className="text-dark-gray-2 text-lg md:text-2xl font-bold py-18">
              Produtos em alta
            </h1>
            <button
              className="md:text-xl text-primary"
              onClick={() => navigate("/produtos")}
            >
              Ver todos ➔
            </button>
          </div>
          <ProductList
            products={products}
            classname={"grid-cols-2 md:grid-cols-4 p-4"}
          />
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
