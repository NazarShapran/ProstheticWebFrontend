import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProstheticDetails } from "./hooks/useProstheticDetails";
import Reviews from "./components/Reviews";
import availableIcon from "../../assets/available-icon.svg";
import unavailableIcon from "../../assets/unavailable-icon.svg";
import typeIcon from "../../assets/type.svg";
import functionalityIcon from "../../assets/functionality.svg";
import amputationLevelIcon from "../../assets/amputation-level.svg";
import materialIcon from "../../assets/material.svg";
import weightIcon from "../../assets/weight.svg";
import "./prostheticDetailsStyles.css";

export default function ProstheticDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { prosthetic, loading, error } = useProstheticDetails(id);

  const handleRequestClick = () => {
    navigate('/form', { state: { selectedProstheticId: id } });
  };

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
              <img 
                src={prosthetic.status === "Available" ? availableIcon : unavailableIcon}
                alt={prosthetic.status === "Available" ? "Доступно" : "Не доступно"}
                className="prosthetic-details-status-icon"
              />
              {prosthetic.status === "Available" ? "Доступно" : "Не доступно"}
            </span>
          </div>

          <div className="prosthetic-details-specifications">
            <h2>Характеристики</h2>

            <div className="specification-item">
              <div className="specification-label">
                <img src={typeIcon} alt="Тип" className="specification-icon" />
                <span>Тип:</span>
              </div>
              <span className="specification-value">{prosthetic.type.title}</span>
            </div>

            <div className="specification-item">
              <div className="specification-label">
                <img src={functionalityIcon} alt="Призначення" className="specification-icon" />
                <span>Призначення:</span>
              </div>
              <span className="specification-value">
                {prosthetic.functionality.title}
              </span>
            </div>

            <div className="specification-item">
              <div className="specification-label">
                <img src={amputationLevelIcon} alt="Рівень ампутації" className="specification-icon" />
                <span>Рівень ампутації:</span>
              </div>
              <span className="specification-value">
                {prosthetic.amputationLevel.title}
              </span>
            </div>

            <div className="specification-item">
              <div className="specification-label">
                <img src={materialIcon} alt="Матеріал" className="specification-icon" />
                <span>Матеріал:</span>
              </div>
              <span className="specification-value">
                {prosthetic.material.title}
              </span>
            </div>

            <div className="specification-item">
              <div className="specification-label">
                <img src={weightIcon} alt="Вага" className="specification-icon" />
                <span>Вага:</span>
              </div>
              <span className="specification-value">{prosthetic.weight} кг</span>
            </div>
          </div>

          {prosthetic.description && (
            <div className="prosthetic-details-description">
              <h2>Опис</h2>
              <p>{prosthetic.description}</p>
            </div>
          )}

          <div className="prosthetic-details-actions">
            <button
              onClick={handleRequestClick}
              className="request-button"
            >
              Залишити заявку
            </button>
          </div>
        </div>
      </div>

      <Reviews prostheticId={id} />
    </div>
  );
}
