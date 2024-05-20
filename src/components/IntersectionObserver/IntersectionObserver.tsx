import { useEffect } from "react";
import styles from "./styles.module.css";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export default function IntersectionObserver() {
  const [ref, isIntersecting] = useIntersectionObserver("-300px");

  useEffect(() => {
    if (ref.current) {
      const children = ref.current.querySelectorAll("div");
      for (const el of children) {
        el.classList.toggle(styles.slide_in, isIntersecting);
      }
    }
  }, [isIntersecting, ref]);

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
