import React from "react";
import FilterSection from "./FilterSection";

const brandItems = [
  { id: "brand1", name: "brand1", value: "Brand1", label: "Adidas" },
  { id: "brand2", name: "brand2", value: "Brand2", label: "Calenciaga" },
  { id: "brand3", name: "brand3", value: "Brand3", label: "K-Swiss" },
  { id: "brand4", name: "brand4", value: "Brand4", label: "Nike" },
  { id: "brand5", name: "brand5", value: "Brand5", label: "Puma" },
];

const categoryItems = [
  {
    id: "category1",
    name: "category1",
    value: "Category1",
    label: "Esporte e lazer",
  },
  { id: "category2", name: "category2", value: "Category2", label: "Casual" },
  {
    id: "category3",
    name: "category3",
    value: "Category3",
    label: "Utilitário",
  },
  { id: "category4", name: "category4", value: "Category4", label: "Corrida" },
];

const genderItems = [
  { id: "gender1", name: "gender1", value: "Male", label: "Masculino" },
  { id: "gender2", name: "gender2", value: "Female", label: "Feminino" },
  { id: "gender3", name: "gender3", value: "Unisex", label: "Unisex" },
];

const conditionItems = [
  { id: "condition1", name: "condition", value: "New", label: "Novo" },
  { id: "condition2", name: "condition", value: "Used", label: "Usado" },
];

const ProductFilter: React.FC = () => {
  return (
    <div className="bg-white md:shadow-lg p-4 rounded-lg w-64">
      <h2 className="font-bold text-xl">Filtrar por</h2>
      <span className="flex h-0.5 my-6 bg-light-gray-2 transition-all duration-500 ease-in-out w-full"></span>
      <FilterSection title="Marca" items={brandItems} itemType="checkbox" />
      <FilterSection
        title="Categoria"
        items={categoryItems}
        itemType="checkbox"
      />
      <FilterSection title="Gênero" items={genderItems} itemType="checkbox" />
      <FilterSection title="Estado" items={conditionItems} itemType="radio" />
    </div>
  );
};

export default ProductFilter;
