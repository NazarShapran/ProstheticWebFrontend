import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useGetAllProsthetics } from "../../catalog/hooks/useGetAllProsthetics";

export default function SliderEmblaSimple() {
  const { prosthetics, loading, error } = useGetAllProsthetics();
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000 })]
  );

  const limitedProsthetics = prosthetics.slice(0, 6);

  if (loading) return <p>Завантаження...</p>;
  // if (error) return <p>Сталася помилка при завантаженні протезів</p>;
  if (!limitedProsthetics.length) return <p>Немає доступних протезів</p>;

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {limitedProsthetics.map((p, index) => (
            <div className="embla__slide" key={p.id}>
              <div className="card">
                <div
                  className={`corner-accent ${index % 2 === 0 ? "left" : "right"}`}
                ></div>
                <div className="glass-overlay"></div>
                <img
                  className="card-image"
                  src={p.imageUrl || "/images/slider2.png"}
                  alt={p.title}
                />
                <div className="card-title">
                  <h3 className="card-heading">{p.title}</h3>
                  <p className="prosthetic-type">{p.type.title}</p>
                </div>
                <p className="card-text">{p.description}</p>
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
