import { useEffect } from "react";
import styles from "./styles.module.css";
import { useCarouselIndicator } from "../../../hooks/useCarouselIndicator";

interface SlideProps {
  content: string;
  index: number;
  setCurrentSlide: (index: number) => void;
}

export default function Slide({ content, index, setCurrentSlide }: SlideProps) {
  const [ref, isIntersecting] = useCarouselIndicator({ threshold: 0.5 });

  useEffect(() => {
    if (isIntersecting) {
      setCurrentSlide(index);
    }
  }, [isIntersecting, index, setCurrentSlide]);

  return (
    <div
      ref={ref}
      className={`${styles.slide} ${isIntersecting ? styles.slide_in : ""}`}
    >
      {content}
    </div>
  );
}
