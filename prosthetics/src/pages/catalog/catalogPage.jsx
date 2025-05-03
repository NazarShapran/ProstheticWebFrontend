import React from "react";
import ProductCard from "./components/productCard";
import Filters from "./components/filters";
import SearchBar from "./components/searchBar";
import useSearch from "./hooks/useSearch";
import "./catalogStyles.css";

const CatalogPage = () => {
  const { searchQuery, handleSearchChange } = useSearch();

  const products = [
    {
      id: 1,
      name: "Prosthetic Arm",
      type: "Arm",
      purpose: "Everyday use",
      weight: "2kg",
      status: "Available",
      image: "/images/slider1.png",
    },
    {
      id: 2,
      name: "Prosthetic Leg",
      type: "Leg",
      purpose: "Running",
      weight: "4kg",
      status: "Unavailable",
      image: "/images/slider3.png",
    },
    {
      id: 3,
      name: "Prosthetic Hand",
      type: "Hand",
      purpose: "Precision tasks",
      weight: "1.5kg",
      status: "Available",
      image: "/images/slider2.png",
    },
    {
      id: 4,
      name: "Prosthetic Arm",
      type: "Arm",
      purpose: "Everyday use",
      weight: "2kg",
      status: "Available",
      image: "/images/slider1.png",
    },
    {
      id: 5,
      name: "Prosthetic Leg",
      type: "Leg",
      purpose: "Running",
      weight: "4kg",
      status: "Unavailable",
      image: "/images/slider3.png",
    },
    {
      id: 6,
      name: "Prosthetic Hand",
      type: "Hand",
      purpose: "Precision tasks",
      weight: "1.5kg",
      status: "Available",
      image: "/images/slider2.png",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="catalog-page">
      <div className="hero-section">
        <img
          src="/images/catalog.jpg"
          alt="Prosthetics"
          className="hero-image"
        />
        <div className="catalog-hero-text">Доступні протези</div>
      </div>
      <div className="catalog-content">
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="filters-section">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
          <Filters />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
