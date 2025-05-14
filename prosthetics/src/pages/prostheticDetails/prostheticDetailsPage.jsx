import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProstheticDetails } from "./hooks/useProstheticDetails";
import Reviews from "./components/Reviews";
import "./prostheticDetailsStyles.css";

export default function ProstheticDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { prosthetic, loading, error } = useProstheticDetails(id);

  if (loading) {
    return <div className="prosthetic-details-loading">Завантаження...</div>;
  }

  if (error || !prosthetic) {
    return (
      <div className="prosthetic-details-error">
        <h2>Помилка завантаження</h2>
        <p>Не вдалося завантажити інформацію про протез</p>
        <button onClick={() => navigate("/catalog")} className="back-button">
          Повернутися до каталогу
        </button>
      </div>
    );
  }

  return (
    <div className="prosthetic-details-page">
      <button onClick={() => navigate("/catalog")} className="back-button">
        ← Назад до каталогу
      </button>

      <div className="prosthetic-details-content">
        <div className="prosthetic-details-image-section">
          <img
            src="/images/slider2.png"
            alt={prosthetic.title}
            className="prosthetic-details-image"
          />
        </div>

        <div className="prosthetic-details-info">
          <h1 className="prosthetic-details-title">{prosthetic.title}</h1>

          <div className="prosthetic-details-status">
            <span
              className={`status-indicator ${
                prosthetic.status === "Available" ? "available" : "unavailable"
              }`}
            >
              {prosthetic.status === "Available" ? "Доступно" : "Не доступно"}
            </span>
          </div>

          <div className="prosthetic-details-specifications">
            <h2>Характеристики</h2>

            <div className="specification-item">
              <span className="specification-label">Тип:</span>
              <span className="specification-value">{prosthetic.type.title}</span>
            </div>

            <div className="specification-item">
              <span className="specification-label">Призначення:</span>
              <span className="specification-value">
                {prosthetic.functionality.title}
              </span>
            </div>

            <div className="specification-item">
              <span className="specification-label">Рівень ампутації:</span>
              <span className="specification-value">
                {prosthetic.amputationLevel.title}
              </span>
            </div>

            <div className="specification-item">
              <span className="specification-label">Матеріал:</span>
              <span className="specification-value">
                {prosthetic.material.title}
              </span>
            </div>

            <div className="specification-item">
              <span className="specification-label">Вага:</span>
              <span className="specification-value">{prosthetic.weight} кг</span>
            </div>
          </div>

          {prosthetic.description && (
            <div className="prosthetic-details-description">
              <h2>Опис</h2>
              <p>{prosthetic.description}</p>
            </div>
          )}

          {prosthetic.status === "Available" && (
            <button
              onClick={() => navigate("/form")}
              className="request-button"
            >
              Залишити заявку
            </button>
          )}
        </div>
      </div>

      <Reviews prostheticId={id} />
    </div>
  );
}
