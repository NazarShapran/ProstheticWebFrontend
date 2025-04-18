import React from "react";
import Slider from "./componetns/slider";
import "./homeStyles.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-hero-container">
        <div className="hero-text">
          <h1>Твоя сила – у твоїх кроках!</h1>
          <p className="home-hero-text">
            Отримай сучасний протез та повернися до активного життя
          </p>
        </div>
        <div className="hero-btn-wrapper">
          <button className="hero-btn">Залишити заявку</button>
        </div>
        <img className="hero-image" src="/images/Hero_section_image.png" alt="hero" />
      </div>
      <div className="content">
        <Slider />
        <div className="stories-section"></div>
      </div>
    </div>
  );
}
