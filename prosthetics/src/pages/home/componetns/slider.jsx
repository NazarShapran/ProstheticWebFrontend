import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const cards = [
  {
    id: "slide1",
    image: "/images/slider1.png",
    heading: "Перший слайд",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: "slide2",
    image: "/images/slider2.png",
    heading: "Другий слайд",
    text: "Ut enim ad minim veniam, quis nostrud exercitation...",
  },
  {
    id: "slide3",
    image: "/images/slider3.png",
    heading: "Третій слайд",
    text: "Ex ea commodo consequat. Duis aute irure dolor in reprehenderit...",
  },
  {
    id: "slide4",
    image: "/images/slider1.png",
    heading: "Четвертий слайд",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: "slide5",
    image: "/images/slider2.png",
    heading: "П'ятий слайд",
    text: "Ut enim ad minim veniam, quis nostrud exercitation...",
  },
  {
    id: "slide6",
    image: "/images/slider3.png",
    heading: "Шостий слайд",
    text: "Ex ea commodo consequat. Duis aute irure dolor in reprehenderit...",
  },
];

export default function SliderEmblaSimple() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {cards.map((card, index) => (
            <div className="embla__slide" key={card.id}>
              <div className="card">
                <div
                  className={`corner-accent ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                ></div>
                <div className="glass-overlay"></div>
                <img className="card-image" src={card.image} alt={card.id} />
                <div className="card-title">
                  <h3 className="card-heading">{card.heading}</h3>
                  <p className="prosthetic-type">{card.prostheticType}</p>
                </div>
                <p className="card-text">{card.text}</p>
                <div className="card-actions">
                  <button className="card-button-cta">Залишити заявку</button>
                  <button className="card-button-secondary">Переглянути</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
