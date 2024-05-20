import React, { useEffect, useRef, useState } from "react";
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

    const currentElement = ref.current; // 현재 엘리먼트 캐시
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.disconnect();
      }
    };
    // 컴포넌트 마운트 시 한 번만 실행
  }, []);

  useEffect(() => {
    // isIntersecting 상태에 따라 클래스를 토글
    if (ref.current) {
      const children = ref.current.querySelectorAll("div");
      for (const el of children) {
        el.classList.toggle(styles.slide_in, isIntersecting);
      }
    }
  }, [isIntersecting]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>This is the Header</header>
      <main ref={ref}>
        <div className={styles.child_one}>Child One</div>
        <div className={styles.child_two}>Child Two</div>
      </main>
      <footer className={styles.footer}>This is the Footer</footer>
    </div>
  );
}
