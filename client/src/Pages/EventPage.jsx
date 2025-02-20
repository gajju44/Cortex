import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Events } from '../Components/EventPage/EventsData';
import Navbar from '../Components/Navbar/Navbar';

export default function EventPage() {
  const slides = Events;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [slides.length]);

  const currentSlide = slides[currentIndex];
  const themeColor = currentSlide.ThemeColor || '#00ffff';

  return (
    <>
    <Navbar/>
  
    <div className="relative top-0 mx-4 pt-24 sm:mx-8 lg:mx-16 lg:mt-40 lg:pt-2 mb-8">
      <div className="relative w-full bg-black/90 overflow-hidden rounded-xl shadow-lg border" style={{ borderColor: `${themeColor}50` }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: slides.length > 1 ? 300 : 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: slides.length > 1 ? -300 : 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col items-center p-6 sm:p-8 h-full">
              <div className="aspect-[4/3] w-full md:w-[90%] mb-6">
                <img
                  loading="lazy"
                  src={currentSlide.Image || "/placeholder.svg"}
                  alt={currentSlide.Name}
                  className="w-full h-full object-cover rounded-lg"
                  style={{ boxShadow: `0 0 15px ${themeColor}` }}
                />
              </div>
              <div className="space-y-4 mb-8 w-full">
                <h1 className="text-3xl md:text-6xl md:text-center font-bold font-ElMessiri drop-shadow-[0_0_8px]" style={{ color: themeColor }}>
                  {currentSlide.Name}
                </h1>
                <p className="text-gray-300  md:text-xl md:text-center leading-relaxed">{currentSlide.Tagline}</p>
                <ul className="list-disc md:mx-auto md:w-fit md:text-xl pl-5 text-gray-300">
                  {currentSlide.Stages.map((stage, index) => (
                    <li key={index}>{stage}</li>
                  ))}
                </ul>
                <div className="flex flex-col w-full gap-3 sm:gap-4">
                  <Link
                    to="/book-appointment"
                    className="inline-flex items-center w-full justify-center px-4 py-3 rounded-lg text-black font-medium transition duration-500"
                    style={{ backgroundColor: themeColor, boxShadow: `0 0 15px ${themeColor}70` }}
                      onMouseEnter={(e) => {
                        e.target.style.boxShadow = `0 0 15px${themeColor}`; // 20% opacity when hovered
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.boxShadow= `0 0 15px ${themeColor}70`; // Revert back to 10% opacity
                      }}
                  >
                     Register Event
                  </Link>
                  <button
                    className="px-4 py-3 rounded-lg w-full border transition duration-500"
                    style={{
                        borderColor: `${themeColor}`, // 50 opacity
                        color: themeColor,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = `${themeColor}20`; // 20% opacity when hovered
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = `transparent`; // Revert back to 10% opacity
                      }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center h-full p-16">
              <div className="flex flex-row items-center justify-between w-full gap-16">
                <div className="flex-1 space-y-6 text-left">
                  <h2 className="text-6xl font-bold font-ElMessiri drop-shadow-[0_0_8px]" style={{ color: themeColor }}>
                    {currentSlide.Name}
                  </h2>
                  <p className="text-gray-300 text-2xl">{currentSlide.Tagline}</p>
                  <ul className="list-disc text-xl pl-5 text-gray-300">
                    {currentSlide.Stages.map((stage, index) => (
                      <li key={index}>{stage}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <Link
                      to="/book-appointment"
                      className="inline-flex items-center justify-center px-4 py-3 rounded-lg text-black font-medium transition duration-500"
                      style={{ backgroundColor: themeColor, boxShadow: `0 0 15px ${themeColor}70` }}
                      onMouseEnter={(e) => {
                        e.target.style.boxShadow = `0 0 15px${themeColor}`; // 20% opacity when hovered
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.boxShadow= `0 0 15px ${themeColor}70`; // Revert back to 10% opacity
                      }}
                    >
                      Register Event
                    </Link>
                    <button
  style={{
    borderColor: `${themeColor}`, // 50 opacity
    color: themeColor,
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = `${themeColor}20`; // 20% opacity when hovered
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = `transparent`; // Revert back to 10% opacity
  }}
  className="px-4 py-3 rounded-lg border transition duration-500"
>
  Learn More
</button>

                  </div>
                </div>
                <div className="flex-1">
                  <img
                    loading="lazy"
                    src={currentSlide.Image || "/placeholder.svg"}
                    alt={currentSlide.Name}
                    className="rounded-lg"
                    style={{ boxShadow: `0 0 20px ${themeColor}` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {slides.length > 0 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? `bg-white` : 'bg-gray-600 hover:bg-gray-500'}`}
                style={index === currentIndex ? { backgroundColor: themeColor } : {}}
              />
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
