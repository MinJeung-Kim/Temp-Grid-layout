import ScrollAnimation from "./ScrollAnimation";
import styles from "./styles.module.css";

export default function IntersectionObserver() {
  return (
    <div className={styles.main}>
      <div className={styles.page}>Scroll down to see the animation1</div>
      <ScrollAnimation />
      <div className={styles.page}>Scroll down to see the animation2</div>
      <ScrollAnimation />
      <div className={styles.page}>Scroll down to see the animation3</div>
      <ScrollAnimation />
      <div className={styles.page}>Scroll down to see the animation4</div>
    </div>
  );
}
