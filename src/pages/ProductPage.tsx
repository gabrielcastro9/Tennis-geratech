import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import ProductFilter from "../components/ProductFilter/ProductFilter";
import { CiFilter } from "react-icons/ci";
import { products } from "../components/ProductList/data";

const ProductPage: React.FC = () => {
  const [sortOption, setSortOption] =
    useState<keyof typeof sortOptions>("relevance");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const location = useLocation();

  const sortOptions: {
    relevance: string;
    priceAsc: string;
    priceDesc: string;
  } = {
    relevance: "Relevância",
    priceAsc: "Preço: Menor para Maior",
    priceDesc: "Preço: Maior para Menor",
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value as keyof typeof sortOptions);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";

    const results = products.filter((product) =>
      product.category.toLowerCase().includes(searchQuery)
    );

    const sortedResults = results.sort((a, b) => {
      switch (sortOption) {
        case "priceAsc":
          return a.price - b.price;
        case "priceDesc":
          return b.price - a.price;
        default:
          return 0;
      }
    });

    setFilteredProducts(sortedResults);
  }, [location.search, sortOption]);

  return (
    <main className="bg-[#F5F5F5]">
      <div className="flex flex-col md:flex-row md:justify-between md:px-16 py-10">
        <label
          htmlFor="sortOptions"
          className="flex order-2 md:order-1 md:items-center justify-center md:text-lg"
        >
          <p className="font-semibold">
            Resultados para "
            {new URLSearchParams(location.search).get("search")}"
          </p>
          &nbsp; - &nbsp;{filteredProducts.length} Produtos
        </label>
        <div className="flex justify-center">
          <select
            name="sortOptions"
            id="sortOptions"
            className="md:mt-2 order-1 mb-4 md:order-2 p-3 md:mr-5 border border-black rounded-md"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option
              value="relevance"
              disabled
              className="font-bold"
            >{`Ordenar por: ${sortOptions[sortOption]}`}</option>
            {Object.entries(sortOptions).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <CiFilter
            className="md:hidden order-2 h-12 w-12 filter-icon ml-3"
            style={{
              backgroundColor: "#EE4266",
              color: "white",
              padding: "8px",
              borderRadius: "20%",
            }}
          />
        </div>
      </div>
      <div className="flex flex-grow w-full  px-8 md:px-16">
        <div className="hidden md:block md:w-1/5">
          <ProductFilter />
        </div>
        <div className="md:w-4/5 w-full">
          <ProductList
            products={filteredProducts}
            classname="grid-cols-2 md:grid-cols-3 px-4"
            isProductPage={true}
          />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
