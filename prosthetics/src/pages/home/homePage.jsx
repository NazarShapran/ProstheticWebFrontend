import React from "react";
import Slider from "./componetns/slider";
import StoryCard from "./componetns/cards";
import "./homeStyles.css";
import Partners from "./componetns/partners";
import Reviews from './componetns/reviews';


export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-hero-container">
        <img
          className="home-hero-image"
          src="/images/new_hero_img.png"
          alt="hero"
        />
        <div className="home-hero-text-content">
          <h1>Твоя сила – <br />у твоїх кроках!</h1>
          <p className="home-hero-text">
            Отримай сучасний протез та повернися <br /> до активного життя
          </p>
        </div>
      </div>
      <div className="home-content">
        <Partners />
        <Reviews />
        <Slider />
        <div className="home-stories">
          <StoryCard
            title="Історичне сходження"
            text="Четверо українських військових з протезами нижніх кінцівок і військова, яка пережила важкі бойові поранення, здійснили сходження на Кіліманджаро. На горі висотою 5 895 метрів разом з іншими альпіністами українці символічно розгорнули наш стяг. Експедиція тривала 6 днів: 4 дні підйому та 2 спуску."
            imageUrl="/images/card1.webp"
          />
          <StoryCard
            title="Треба жити далі"
            text="Під час боїв під Ізюмом навесні 2022 року військовий Михайло Юрчук отримав складне поранення. Внаслідок цього чоловік втратив руку та ногу. Спочатку йому встановили протез ноги, а нещодавно сучасний біонічний протез руки. Завдяки спеціальним сенсорам він може відтворювати звичні рухи."
            imageUrl="/images/card2.jpg"
          />
          <StoryCard
            title="Технологія, що повернула радість"
            text="Яків Балакірев – військовий, який до повномасштабної війни працював веброзробником. У 2022 році він отримав повістку й без вагань став до лав захисників. Спочатку проходив навчання у Львові, потім служив у 32-му реактивним артилерійському полку, а згодом — у 37-й бригаді під Авдіївкою."
            imageUrl="/images/card3.jpg"
          />
        </div>
      </div>
    </div>
  );
}