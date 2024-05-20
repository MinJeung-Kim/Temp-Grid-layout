import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

export default function IntersectionObserver3() {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      const children = ref.current.querySelectorAll("div");
      if (isIntersecting) {
        children.forEach((el) => {
          el.classList.add(`${styles.slide_in}`);
        });
      } else {
        children.forEach((el) => {
          el.classList.remove(`${styles.slide_in}`);
        });
      }
    }
  }, [isIntersecting]);

  return (
    <div className={styles.app}>
      <header>This is the Header</header>
      <main ref={ref}>
        <div className={styles.child_one}>Child One</div>
        <div className={styles.child_two}>Child Two</div>
      </main>
      <footer>This is the Footer</footer>
    </div>
  );
}
