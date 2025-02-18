import React, { useState, useEffect } from "react";
import anime from "animejs";

const HeroSection = () => {
  const titles = [
    "Redefine Air Travel with Private Jets",
    "Embark on a Lavish Ocean Journey",
    "Arrive in Unparalleled Style"
  ];

  const descriptions = [
    "Redefine your air travel experience with our private jet charters. Skip the lines and soar above with unparalleled privacy, personalized service, and all the luxury you deserve. Reach your destination faster and in style.",
    "Discover the art of luxury at sea. Our premium yacht services offer unparalleled comfort and bespoke experiences, from serene ocean cruises to lavish private parties. Indulge in the ultimate maritime adventure.",
    "Turn every journey into a first-class experience with our elite selection of luxury cars. Whether for a special occasion or everyday indulgence, we offer the finest vehicles for those who demand the best on the road."
  ];

  const images = [
    "/images/hero-jet-bg.jpg",
    "/images/hero-yacht-bg.jpg",
    "/images/hero-car-bg.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const heroSection = document.querySelector(".hero");
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
    heroSection.style.transition = "background-image 1s ease-in-out";
    
    anime({
      targets: ".hero-title",
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1000,
      easing: "easeInOutQuad"
    });

    anime({
      targets: ".hero-description",
      opacity: [0, 1],
      duration: 1200,
      easing: "easeInOutQuad",
      delay: 300
    });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="hero relative w-full h-screen flex items-center justify-center text-white bg-cover bg-center transition-all duration-1000">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="hero-title text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in">
          {titles[currentIndex]}
        </h1>
        <p className="hero-description text-lg md:text-xl opacity-80 mb-6 animate-fade-in">
          {descriptions[currentIndex]}
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#book" className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg">
            Book Now
          </a>
          <a href="#learn-more" className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-full text-lg font-semibold transition-all duration-300 shadow-lg">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
