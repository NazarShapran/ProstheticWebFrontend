import ProductCard from "./components/productCard";
import Filters from "./components/filters";
import SearchBar from "./components/searchBar";
import useSearch from "./hooks/useSearch";
import { useGetAllProsthetics } from "./hooks/useGetAllProsthetics";
import { useFilteredProsthetics } from "./hooks/useFilteredProthetics";
import "./catalogStyles.css";
import { useState } from "react";

const CatalogPage = () => {
  const { searchQuery, handleSearchChange } = useSearch();
  const { prosthetics, loading } = useGetAllProsthetics();
  const [filters, setFilters] = useState({
    filters: {
      type: [],
      functionality: [],
      amputationLevel: [],
      material: [],
    },
    weightRange: [0, 10],
  });

  const filteredProsthetics = useFilteredProsthetics({
    prosthetics,
    searchQuery,
    filters: filters.filters,
    weightRange: filters.weightRange,
  });

  return (
    <div className="catalog-page">
      <div className="hero-section">
        <img src="/images/catalog.jpg" alt="Prosthetics" className="hero-image" />
        <div className="catalog-hero-text">Доступні протези</div>
      </div>

      <div className="catalog-content">
        <div className="product-list">
          {loading ? <p>Завантаження...</p> : <ProductCard filteredProsthetics={filteredProsthetics} />}
        </div>

        <div className="filters-section">
          <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
          <Filters onFilterChange={setFilters} />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
