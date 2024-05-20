import React, { useState } from "react";
import styles from "./styles.module.css";
import Slide from "./Slide";

const slides = [
  { id: 1, content: "Child One" },
  { id: 2, content: "Child Two" },
  { id: 3, content: "Child Three" },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className={styles.app}>
      <header className={styles.header}>This is the Header</header>
      <main className={styles.carousel}>
        {slides.map((slide, index) => (
          <Slide
            key={slide.id}
            content={slide.content}
            index={index}
            setCurrentSlide={setCurrentSlide}
          />
        ))}
      </main>
      <footer className={styles.footer}>This is the Footer</footer>
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.activeDot : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
