import styles from "./styles.module.css";

export default function GridLayout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Header</header>
      <div className={styles.banner}>Banner</div>
      <nav className={styles.left_aside}>Left Aside</nav>
      <main className={styles.main}>Main Content</main>
      <nav className={styles.right_aside}>Right Aside</nav>
      <div className={styles.low_content}>Low Content</div>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
