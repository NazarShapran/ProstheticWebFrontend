import React from "react";

const ProductCard = ({ filteredProsthetics }) => {
 
  if (!filteredProsthetics || filteredProsthetics.length === 0) {
    return <p>Протези не знайдено</p>;
  }

  return (
    <>
      {filteredProsthetics.map((prosthetic) => (
        <div key={prosthetic.id} className="product-card">
          <img
            src="/images/slider2.png"
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
              <span className="info-label">Вага:</span>
              <span className="info-value">{prosthetic.weight}</span>
            </div>

            <div className="info-item status-item">
              <span
                className={`info-value ${
                  prosthetic.status === "Available"
                    ? "available-text"
                    : "unavailable-text"
                }`}
              >
                {prosthetic.status === "Available" ? "Доступно" : "Не доступно"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
