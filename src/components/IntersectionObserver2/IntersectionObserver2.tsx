import { useElementOnScreen } from "../../hooks/useElementOnScreen";
import moe from "./moe.jpg";
import styles from "./styles.module.css";

export default function IntersectionObserver2() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  return (
    <div className={styles.app}>
      <div className={styles.isVisible}>
        {isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}
      </div>
      <div className={styles.section}></div>
      <div className={styles.box} ref={containerRef}>
        <img src={moe} alt="Moe" />
      </div>
    </div>
  );
}
