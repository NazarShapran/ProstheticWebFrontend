import ProductCard from "./components/productCard";
import Filters from "./components/filters";
import SearchBar from "./components/searchBar";
import useSearch from "./hooks/useSearch";
import { useGetAllProsthetics } from "./hooks/useGetAllProsthetics";
import { useFilteredProsthetics } from "./hooks/useFilteredProthetics";
import { CircularProgress } from "@mui/material";
import "./catalogStyles.css";
import { useState } from "react";

const CatalogPage = () => {
  const { searchQuery, handleSearchChange } = useSearch();
  const { prosthetics, loading, hasMore, loadMore } = useGetAllProsthetics();
  const [filters, setFilters] = useState({
    filters: {
      type: [],
      functionality: [],
      amputationLevel: [],
      material: [],
      status: [],
    },
    weightRange: [0, 10],
  });

  const { results: filteredProsthetics, isFiltering } = useFilteredProsthetics({
    prosthetics,
    searchQuery,
    filters: filters.filters,
    weightRange: filters.weightRange,
  });

  const handleLoadMore = async () => {
    await loadMore();
  };

  const renderLoadingState = () => (
    <div className="loading-container">
      <CircularProgress style={{ color: '#73A965' }} />
      <p>Завантаження протезів...</p>
    </div>
  );

  const renderFilteringState = () => (
    <div className="loading-container filtering">
      <CircularProgress style={{ color: '#73A965' }} />
      <p>Застосування фільтрів...</p>
    </div>
  );

  return (
    <div className="catalog-page">
      <div className="hero-section">
        <img src="/images/catalog.jpg" alt="Prosthetics" className="hero-image" />
        <div className="catalog-hero-text">Доступні протези</div>
      </div>

      <div className="catalog-content">
        <div className="product-list">
          {loading && prosthetics.length === 0 ? (
            renderLoadingState()
          ) : isFiltering ? (
            renderFilteringState()
          ) : (
            <>
              <ProductCard filteredProsthetics={filteredProsthetics} />
              {hasMore && filteredProsthetics.length === prosthetics.length && (
                <div className="load-more-container">
                  <button
                    className="load-more-button"
                    onClick={handleLoadMore}
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="button-loading">
                        <CircularProgress size={20} style={{ color: '#fff' }} />
                        <span>Завантаження...</span>
                      </div>
                    ) : (
                      "Показати більше"
                    )}
                  </button>
                </div>
              )}
            </>
          )}
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
