import ProductCard from "./components/productCard";
import Filters from "./components/filters";
import SearchBar from "./components/searchBar";
import useSearch from "./hooks/useSearch";
import { useGetAllProsthetics } from "./hooks/useGetAllProsthetics";
import "./catalogStyles.css";

const CatalogPage = () => {
  const { searchQuery, handleSearchChange } = useSearch();
  const { prosthetics, setProsthetics, loading, error } =
    useGetAllProsthetics();

  const filteredProsthetics = prosthetics.filter((prosthetic) =>
    prosthetic.title.toLowerCase().includes(searchQuery.toLowerCase())
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
          {loading && <p>Завантаження...</p>}
          <ProductCard
            filteredProsthetics={filteredProsthetics}
          />
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
