import React from "react";
import "./homeStyles.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Твоя сила – у твоїх кроках!</h1>
      <p className="home-hero-text">
        Отримай сучасний протез та повернися до активного життя
      </p>
      <button className="hero-btn">Залишити заявку</button>
      <img src="/images/Hero_section_image.png" alt="hero" />
    </div>
  );
}
