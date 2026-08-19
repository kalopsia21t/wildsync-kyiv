import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>Copyright {year} © Wildsync Kyiv</div>
      <div className={styles.socials}>
        <Link href="https://t.me/wildsync" aria-label="Telegram" className={styles.iconLink}>
          <img src="/icons8-telegram-50.png" alt="Telegram" className={styles.iconImg} />
        </Link>
        <Link href="https://soundcloud.com/wildsync" aria-label="SoundCloud" className={styles.iconLink}>
          <img src="/icons8-soundcloud-50.png" alt="SoundCloud" className={styles.iconImg} />
        </Link>
        <Link href="https://www.instagram.com/wildsync_" aria-label="Instagram" className={styles.iconLink}>
          <img src="/icons8-instagram-50.png" alt="Instagram" className={styles.iconImg} />
        </Link>
      </div>
    </footer>
  );
}
