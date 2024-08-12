import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

interface ProductListProps {
  classname?: string;
  products: Array<{
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    tam?: string[];
    cores?: string[];
    price_old?: number;
    discount?: string;
    imagesSrc: string[];
  }>;
  isProductPage?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({
  classname,
  products,
  isProductPage = false,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 375);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayedProducts = isSmallScreen
    ? products.slice(0, isProductPage ? 8 : 4)
    : isProductPage
    ? products
    : products.slice(0, 12);

  return (
    <div className={`grid ${classname} gap-4 pb-10`}>
      {displayedProducts.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          discount={product.discount}
          imagesSrc={product.imagesSrc}
          price_old={product.price_old}
        />
      ))}
    </div>
  );
};

export default ProductList;
