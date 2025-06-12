import React from "react";
import { useNavigate } from "react-router-dom";
import Empty from "../../../assets/Empty.svg?react";

const ProductCard = ({ filteredProsthetics }) => {
  const navigate = useNavigate();
 
  if (!filteredProsthetics || filteredProsthetics.length === 0) {
    return (
      <div className="empty-state">
        <Empty className="empty-illustration" />
        <p className="empty-text">Протези не знайдено</p>
      </div>
    );
  }

  const handleCardClick = (prostheticId) => {
    navigate(`/catalog/${prostheticId}`);
  };

  const getProstheticImage = (amputationLevel) => {
    const handLevels = ["Кистьовий", "Передплічний", "Плечовий"];
    const legLevels = ["Стопа", "Гомілковий", "Стегновий", "Гіп-дізарткуляційний"];
    if (handLevels.includes(amputationLevel)) {
      return "/images/slider2.png";
    }
    if (legLevels.includes(amputationLevel)) {
      return "/images/slider3.png";
    }
    return "/images/slider2.png";
  };

  return (
    <>
      {filteredProsthetics.map((prosthetic) => (
        <div
          key={prosthetic.id}
          className="product-card"
          onClick={() => handleCardClick(prosthetic.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleCardClick(prosthetic.id);
            }
          }}
        >
          <img
            src={getProstheticImage(prosthetic.amputationLevel.title)}
            alt={prosthetic.title}
            className="product-image"
          />
          <h2 className="product-title">{prosthetic.title}</h2>

          <div className="product-info">
            <div className="info-item">
              <span className="info-label">Тип:</span>
              <span className="info-value">{prosthetic.type.title}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Призначення:</span>
              <span className="info-value">
                {prosthetic.functionality.title}
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">Рівень ампутації:</span>
              <span className="info-value">
                {prosthetic.amputationLevel.title}
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">Вага:</span>
              <span className="info-value">{prosthetic.weight}</span>
            </div>

            <div className="info-item status-item">
              <span
                className={`info-value ${
                  prosthetic.status.title === "Доступно"
                    ? "available-text"
                    : "unavailable-text"
                }`}
              >
                {prosthetic.status.title === "Доступно" ? "Доступно" : "Не доступно"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
