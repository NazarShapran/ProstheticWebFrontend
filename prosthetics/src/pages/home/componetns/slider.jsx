import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useGetAllProsthetics } from "../../catalog/hooks/useGetAllProsthetics";
import { useNavigate } from 'react-router-dom';

export default function SliderEmblaSimple() {
  const { prosthetics, loading, error } = useGetAllProsthetics();
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000 })]
  );
  const navigate = useNavigate();

  const getProstheticImage = (amputationLevel) => {
    const handLevels = ["Кистьовий", "Передплічний", "Плечовий"];
    const legLevels = ["Стопа", "Гомілковий", "Стегновий", "Гіп-дізарткуляційний"];
    if (handLevels.includes(amputationLevel)) {
      return "/images/slider2.png";
    }
    if (legLevels.includes(amputationLevel)) {
      return "/images/slider3.png";
    }
    return "/images/slider2.png";
  };

  const limitedProsthetics = prosthetics.slice(0, 6);

  const handleRequestClick = () => {
    navigate('/form');
  };

  const handleDetailsClick = (prostheticId) => {
    navigate(`/catalog/${prostheticId}`);
  };

  if (loading) return <p>Завантаження...</p>;
  if (!limitedProsthetics.length) return (
    <div className="empty-state">
      <Empty className="empty-illustration" />
      <p className="empty-text">Немає доступних протезів</p>
    </div>
  );;

  return (
    <section className="embla">
      <h2 className="embla-title">Доступні протези</h2>
      <p className="embla-description">
        Ці протези можуть бути корисними саме для тебе, <br />просто залиши заявку і ми зв'яжемось з тобою.
      </p>
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
                  src={p.imageUrl || getProstheticImage(p.amputationLevel?.title)}
                  alt={p.title}
                />
                <div className="card-content">
                  <div className="card-title">
                    <h3 className="card-heading">{p.title}</h3>
                    <p className="prosthetic-type">{p.type.title}</p>
                  </div>
                  <p className="card-text">{p.description}</p>
                  <div className="card-actions">
                    <button 
                      className="home-card-button-cta"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRequestClick(p.id);
                      }}
                    >
                      Залишити заявку
                    </button>
                    <button 
                      className="home-card-button-secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDetailsClick(p.id);
                      }}
                    >
                      Переглянути
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
