import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-title">{product.name}</h2>

      <div className="product-info">
        <div className="info-item">
          <span className="info-label">Тип:</span>
          <span className="info-value">{product.type}</span>
        </div>

        <div className="info-item">
          <span className="info-label">Призначення:</span>
          <span className="info-value">{product.purpose}</span>
        </div>

        <div className="info-item">
          <span className="info-label">Вага:</span>
          <span className="info-value">{product.weight}</span>
        </div>

        <div className="info-item status-item">
          <span
            className={`info-value ${
              product.status === "Available"
                ? "available-text"
                : "unavailable-text"
            }`}
          >
            {product.status === "Available" ? "Доступно" : "Не доступно"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
