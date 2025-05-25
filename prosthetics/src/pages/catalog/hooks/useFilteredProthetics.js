import { useState, useEffect } from "react";

const matchesFilter = (value, selected) =>
  selected.length === 0 || selected.includes(value);

export const useFilteredProsthetics = ({
  prosthetics,
  searchQuery,
  filters,
  weightRange,
}) => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    setIsFiltering(true);
    
    const filterTimer = setTimeout(() => {
      const results = prosthetics.filter((item) => {
        const matchesSearch = item.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        const matchesType = matchesFilter(item.type.title, filters.type);
        const matchesFunctionality = matchesFilter(
          item.functionality.title,
          filters.functionality
        );
        const matchesAmputationLevel = matchesFilter(
          item.amputationLevel.title,
          filters.amputationLevel
        );
        const matchesMaterial = matchesFilter(
          item.material.title,
          filters.material
        );
        
        const matchesWeight =
          item.weight >= weightRange[0] && item.weight <= weightRange[1];

        return (
          matchesSearch &&
          matchesType &&
          matchesFunctionality &&
          matchesAmputationLevel &&
          matchesMaterial &&
          matchesWeight
        );
      });

      setFilteredResults(results);
      setIsFiltering(false);
    }, 100); // 0.8 second delay

    return () => clearTimeout(filterTimer);
  }, [prosthetics, searchQuery, filters, weightRange]);

  return { results: filteredResults, isFiltering };
};
