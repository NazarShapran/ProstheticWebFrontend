import React, { useState, useEffect } from "react";
import Select from 'react-select';
import Slider from "@mui/material/Slider";

const Filters = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    functionality: [],
    amputationLevel: [],
    material: [],
    status: [],
  });

  const [weight, setWeight] = useState([0, 10]);

  // Options for Select components
  const options = {
    type: [
      { value: "Функціональні", label: "Функціональні" },
      { value: "Косметичні", label: "Косметичні" },
      { value: "Спортивні", label: "Спортивні" },
      { value: "Робочі", label: "Робочі" },
    ],
    functionality: [
      { value: "Пасивні", label: "Пасивні" },
      { value: "Механічні", label: "Механічні" },
      { value: "Біонічні", label: "Біонічні" },
      { value: "Міоелектричні", label: "Міоелектричні" },
    ],
    amputationLevel: [
      { value: "Кистьовий", label: "Кистьовий" },
      { value: "Передплічний", label: "Передплічний" },
      { value: "Плечовий", label: "Плечовий" },
      { value: "Стопа", label: "Стопа" },
      { value: "Гомілковий", label: "Гомілковий" },
      { value: "Стегновий", label: "Стегновий" },
      { value: "Гіп-дизарткуляційний", label: "Гіп-дизарткуляційний" },
    ],
    material: [
      { value: "Карбон", label: "Карбон" },
      { value: "Пластик", label: "Пластик" },
      { value: "Металеві сплави", label: "Металеві сплави" },
    ],
    status: [
      { value: "Доступно", label: "Доступно" },
      { value: "Не доступно", label: "Не доступно" },
    ],
  };

  useEffect(() => {
    // Convert selected options back to simple array of values for the parent component
    const simplifiedFilters = {
      type: selectedFilters.type.map(option => option.value),
      functionality: selectedFilters.functionality.map(option => option.value),
      amputationLevel: selectedFilters.amputationLevel.map(option => option.value),
      material: selectedFilters.material.map(option => option.value),
      status: selectedFilters.status.map(option => option.value),
    };
    onFilterChange({ filters: simplifiedFilters, weightRange: weight });
  }, [selectedFilters, weight, onFilterChange]);

  const handleSelectChange = (category, selectedOptions) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: selectedOptions || []
    }));
  };

  const handleSliderChange = (event, newValue) => {
    setWeight(newValue);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      borderRadius: '24px',
      borderColor: '#73A965',
      '&:hover': {
        borderColor: '#73A965'
      },
      boxShadow: 'none',
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: '#73A965',
      borderRadius: '12px',
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: 'white',
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: 'white',
      ':hover': {
        backgroundColor: '#496B40',
        color: 'white',
      },
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected 
        ? '#73A965' 
        : isFocused 
          ? '#73A96520' 
          : 'white',
      color: isSelected ? 'white' : 'black',
      ':active': {
        backgroundColor: '#73A965',
      },
    }),
  };

  return (
    <div className="filters">
      <div className="filter-group">
        <h4>Тип</h4>
        <Select
          isMulti
          options={options.type}
          value={selectedFilters.type}
          onChange={(selected) => handleSelectChange('type', selected)}
          styles={customStyles}
          placeholder="Оберіть тип"
        />
      </div>

      <div className="filter-group">
        <h4>Функціональність</h4>
        <Select
          isMulti
          options={options.functionality}
          value={selectedFilters.functionality}
          onChange={(selected) => handleSelectChange('functionality', selected)}
          styles={customStyles}
          placeholder="Оберіть функціональність"
        />
      </div>

      <div className="filter-group">
        <h4>Рівень ампутації</h4>
        <Select
          isMulti
          options={options.amputationLevel}
          value={selectedFilters.amputationLevel}
          onChange={(selected) => handleSelectChange('amputationLevel', selected)}
          styles={customStyles}
          placeholder="Оберіть рівень ампутації"
        />
      </div>

      <div className="filter-group">
        <h4>Матеріал</h4>
        <Select
          isMulti
          options={options.material}
          value={selectedFilters.material}
          onChange={(selected) => handleSelectChange('material', selected)}
          styles={customStyles}
          placeholder="Оберіть матеріал"
        />
      </div>

      <div className="filter-group">
        <h4>Статус</h4>
        <Select
          isMulti
          options={options.status}
          value={selectedFilters.status}
          onChange={(selected) => handleSelectChange('status', selected)}
          styles={customStyles}
          placeholder="Оберіть статус"
        />
      </div>

      <div className="filter-group">
        <h4>Вага</h4>
        <Slider
          value={weight}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={0}
          max={10}
          sx={{
            color: "#73A965",
            height: 4,
            maxWidth: "100%",
            "& .MuiSlider-thumb": { width: 16, height: 16 },
            "& .MuiSlider-track": { border: "none" },
            "& .MuiSlider-rail": { opacity: 0.2, backgroundColor: "#73A965" },
            "& .MuiSlider-valueLabel": {
              backgroundColor: "#73A965",
              color: "white",
            },
          }}
        />
        <div className="weight-range">
          <span>{weight[0]} кг</span>
          <span>{weight[1]} кг</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
