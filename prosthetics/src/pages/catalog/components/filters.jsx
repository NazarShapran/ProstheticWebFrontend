import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const Filters = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    functionality: [],
    amputationLevel: [],
    material: [],
  });

  const [weight, setWeight] = useState([0, 10]);

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const handleSliderChange = (event, newValue) => {
    setWeight(newValue);
  };

  const typeOptions = ["Функціональні", "Косметичні", "Спортивні", "Робочі"];
  const functionalityOptions = [
    "Пасивні",
    "Механічні",
    "Біонічні",
    "Міоелектричні",
  ];
  const amputationOptions = [
    "Кистьовий",
    "Передпліччя",
    "Плечовий",
    "Стопа",
    "Гомілковий",
    "Стегновий",
    "Гіп-дизарткуляційний",
  ];
  const materialOptions = ["Карбон", "Пластик", "Металеві сплави"];

  const renderCheckboxGroup = (title, category, options) => (
    <div className="filter-group">
      <h4>{title}</h4>
      <div className="checkbox-box">
        {options.map((option) => (
          <label key={option} className="checkbox-item">
            <input
              type="checkbox"
              checked={selectedFilters[category].includes(option)}
              onChange={() => handleCheckboxChange(category, option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="filters">
      {renderCheckboxGroup("Тип", "type", typeOptions)}
      {renderCheckboxGroup(
        "Функціональність",
        "functionality",
        functionalityOptions
      )}
      {renderCheckboxGroup(
        "Рівень ампутації",
        "amputationLevel",
        amputationOptions
      )}
      {renderCheckboxGroup("Матеріал", "material", materialOptions)}

      <div className="filter-group">
        <h4>Вага</h4>
        <Slider
          value={weight}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={0}
          max={10}
          sx={{
            color: "#64D9B9",
            height: 4,
            maxWidth: "90%",
            "& .MuiSlider-thumb": {
              width: 16,
              height: 16,
            },
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-rail": {
              opacity: 0.2,
              backgroundColor: "#64D9B9",
            },
            "& .MuiSlider-valueLabel": {
              backgroundColor: "#64D9B9",
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
