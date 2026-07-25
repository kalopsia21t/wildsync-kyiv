import styles from "./Footer.module.css";

export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <footer className={styles.footer}>Copyright {year} © Wildsync Kyiv</footer>
  );
}
