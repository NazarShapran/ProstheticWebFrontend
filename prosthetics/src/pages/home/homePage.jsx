import React from "react";
import Slider from "./componetns/slider";
import StoryCard from "./componetns/cards";
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
        <img
          className="hero-image"
          src="/images/Hero_section_image.png"
          alt="hero"
        />
      </div>
      <div className="content">
        <Slider />
        <div>
          <StoryCard
            title="Історичне сходження"
            text="Четверо українських військових з протезами нижніх кінцівок і військова, яка пережила важкі бойові поранення, здійснили сходження на Кіліманджаро. На горі висотою 5 895 метрів разом з іншими альпіністами українці символічно розгорнули наш стяг. Експедиція тривала 6 днів: 4 дні підйому та 2 спуску. "
            imageUrl="/images/card1.webp"
          />
          <StoryCard
            title="Треба жити далі"
            text="Під час боїв під Ізюмом навесні 2022 року військовий Михайло Юрчук отримав складне поранення. Внаслідок цього чоловік втратив руку та ногу. Спочатку йому встановили протез ноги, а нещодавно сучасний біонічний протез руки. Завдяки спеціальним сенсорам він може відтворювати звичні рухи."
            imageUrl="/images/card2.jpg"
          />
          <StoryCard
            title="Технологія, що повернула радість"
            text="Яків Балакірев – військовий, який до повномасштабної війни працював веброзробником. У 2022 році він отримав повістку й без вагань став до лав захисників. Спочатку проходив навчання у Львові, потім служив у 32-му реактивному артилерійському полку, а згодом — у 37-й бригаді під Авдіївкою."
            imageUrl="/images/card3.jpg"
          />
        </div>
      </div>
    </div>
  );
}
