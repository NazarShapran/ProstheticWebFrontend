import React from "react";
import { motion, useInView } from "motion/react";
import Slider from "./componetns/slider";
import StoryCard from "./componetns/cards";
import "./homeStyles.css";
import Partners from "./componetns/partners";
import Reviews from './componetns/reviews';
import Location from './componetns/location';

export default function HomePage() {
  const partnersRef = React.useRef(null);
  const sliderRef = React.useRef(null);
  const reviewsRef = React.useRef(null);
  const locationRef = React.useRef(null);

  const isPartnersInView = useInView(partnersRef, { once: true });
  const isSliderInView = useInView(sliderRef, { once: true });
  const isReviewsInView = useInView(reviewsRef, { once: true });
  const isLocationInView = useInView(locationRef, { once: true });

  return (
    <div className="home-page">
      <motion.div 
        className="home-hero-container"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          className="home-hero-image"
          src="/images/new_hero_img.png"
          alt="hero"
          animate={{ scale: [1.2, 1] }}
          transition={{ duration: 1.2 }}
        />
        <motion.div 
          className="home-hero-text-content"
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h1
            animate={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Твоя сила – <br />у твоїх кроках!
          </motion.h1>
          <motion.p 
            className="home-hero-text"
            animate={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Отримай сучасний протез та повернися <br /> до активного життя
          </motion.p>
        </motion.div>
      </motion.div>
      <div className="home-content">
        <motion.div
          ref={partnersRef}
          animate={isPartnersInView ? { y: [50, 0], opacity: [0, 1] } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Partners />
        </motion.div>
        
        <motion.div
          ref={sliderRef}
          animate={isSliderInView ? { y: [50, 0], opacity: [0, 1] } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Slider />
        </motion.div>
        
        <motion.div
          ref={reviewsRef}
          animate={isReviewsInView ? { y: [50, 0], opacity: [0, 1] } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Reviews />
        </motion.div>
        
        <div className="home-stories">
          <StoryCard
            title="Історичне сходження"
            text="Четверо українських військових з протезами нижніх кінцівок і військова, яка пережила важкі бойові поранення, здійснили сходження на Кіліманджаро. На горі висотою 5 895 метрів разом з іншими альпіністами українці символічно розгорнули наш стяг. Експедиція тривала 6 днів: 4 дні підйому та 2 спуску."
            imageUrl="/images/card1.webp"
            articleUrl="https://shotam.info/hotovi-dosiahaty-vershyn-navit-pislia-poranen-tse-ukrainski-viyskovi-iaki-ziyshly-na-kilimandzharo/"
          />
          <StoryCard
            title="Треба жити далі"
            text="Під час боїв під Ізюмом навесні 2022 року військовий Михайло Юрчук отримав складне поранення. Внаслідок цього чоловік втратив руку та ногу. Спочатку йому встановили протез ноги, а нещодавно сучасний біонічний протез руки. Завдяки спеціальним сенсорам він може відтворювати звичні рухи."
            imageUrl="/images/card2.jpg"
            articleUrl="https://suspilne.media/lviv/282544-treba-ziti-dali-istoria-ukrainskogo-voina-mihajla-urcuka-akomu-vstanovili-bionicnij-protez/"
          />
          <StoryCard
            title="Технологія, що повернула радість"
            text="Яків Балакірев – військовий, який до повномасштабної війни працював веброзробником. У 2022 році він отримав повістку й без вагань став до лав захисників. Спочатку проходив навчання у Львові, потім служив у 32-му реактивним артилерійському полку, а згодом — у 37-й бригаді під Авдіївкою."
            imageUrl="/images/card3.jpg"
            articleUrl="https://forbes.ua/war-in-ukraine/maybutne-pochinaetsya-sogodni-istorii-ukrainskikh-zakhisnikiv-yaki-pislya-protezuvannya-povertayutsya-do-zhittya-ta-vtilyuyut-mrii-29022024-19472"
          />
        </div>

        <motion.div
          ref={locationRef}
          animate={isLocationInView ? { y: [50, 0], opacity: [0, 1] } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Location />
        </motion.div>
      </div>
    </div>
  );
}