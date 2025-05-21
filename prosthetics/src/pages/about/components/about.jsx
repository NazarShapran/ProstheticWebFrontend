import React from 'react';

export default function AboutSection() {
  return (
    <section className="about-container">
      <h1>Про платформу</h1>
      <div className="about-text">
        <div className="about-text-primary">
          Ця платформа створена для того, щоб <strong><i>допомогти українським військовим</i></strong>,
          які отримали поранення, знайти якісні протези <br />та отримати необхідну
          підтримку. Ми надаємо зручний каталог доступних протезів, які можна
          обрати під індивідуальні потреби.
        </div>
        <div className="about-text-secondary">
          Цей сайт – більше, ніж просто каталог. <strong><i>Це спільнота небайдужих людей</i></strong>,
          які готові підтримати наших захисників на шляху <br />до нового життя.
        </div>
      </div>
    </section>
  );
}
