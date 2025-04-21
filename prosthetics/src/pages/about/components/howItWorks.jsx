import React from "react";
import Bg_svg from "../../../common/svgs/about_bg.svg?react";
import { LooksOne, LooksTwo, Looks3, Looks4 } from "@mui/icons-material";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <LooksOne sx={{ fontSize: 60 }} />,
      title: "Зареєструйтеся",
      text: "Створіть обліковий запис, щоб отримати доступ до всіх можливостей платформи",
    },
    {
      icon: <LooksTwo sx={{ fontSize: 60 }} />,
      title: "Оберіть протез",
      text: "Перегляньте каталог протезів та виберіть той, який найкраще відповідає вашим потребам",
    },
    {
      icon: <Looks3 sx={{ fontSize: 60 }} />,
      title: "Заповніть заявку",
      text: "Надайте необхідну інформацію, щоб ми могли швидше обробити ваш запит",
    },
    {
      icon: <Looks4 sx={{ fontSize: 60 }} />,
      title: "Очікуйте зв’язку",
      text: "Наші спеціалісти зв’яжуться з вами для уточнення деталей та підбору оптимального рішення",
    },
  ];

  return (
    <section className="how-it-works-container">
        <div className="about-bg-svg">
            <Bg_svg />
        </div>
      <h1>Як це працює</h1>
      <div className="how-it-works-grid">
        {steps.map((step, index) => (
          <div className="how-it-works-step" key={index}>
            <div className="icon">{step.icon}</div>
            <div className="text">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
