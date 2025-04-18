import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const cards = [
  {
    id: "slide1",
    image: "/images/slider1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: "slide2",
    image: "/images/slider2.png",
    text: "Ut enim ad minim veniam, quis nostrud exercitation...",
  },
  {
    id: "slide3",
    image: "/images/slider3.png",
    text: "Ex ea commodo consequat. Duis aute irure dolor in reprehenderit...",
  },
  {
    id: "slide4",
    image: "/images/slider1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: "slide5",
    image: "/images/slider2.png",
    text: "Ut enim ad minim veniam, quis nostrud exercitation...",
  },
  {
    id: "slide6",
    image: "/images/slider3.png",
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
          {cards.map((card) => (
            <div className="embla__slide" key={card.id}>
              <div className="card">
                {/* 90-градусне коло в кутку */}
                <div className="corner-accent"></div>

                {/* Напівпрозорий блок для гласморфізму */}
                <div className="glass-overlay"></div>

                {/* Контент */}
                <img className="card-image" src={card.image} alt={card.id} />
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
