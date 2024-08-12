import React from "react";
import CollectionCard from "./CollectionCard";

const Collection: React.FC = () => {
  const cards = [
    {
      title: "Novo drop Supreme",
      discount: "30% OFF",
      imageSrc: "camisa.svg",
    },
    {
      title: "Coleção Adidas",
      discount: "20% OFF",
      imageSrc: "tenis_collection.svg",
    },
    {
      title: "Novo Beats Bass",
      discount: "50% OFF",
      imageSrc: "fone.svg",
    },
  ];

  return (
    <div className="py-10 ">
      <h1 className="text-dark-gray-2 text-2xl font-bold pl-4">
        Coleções em destaque
      </h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 overflow-x-auto p-4">
        {cards.map((card, index) => (
          <CollectionCard
            key={index}
            title={card.title}
            discount={card.discount}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
