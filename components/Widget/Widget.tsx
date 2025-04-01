import Image from "next/image";

import styles from "@styles/events.module.css";

export default function Widget() {
  return (
    <div className={styles.eventCard}>
      <div className={styles.eventImgContainer}>
        <Image
          className={styles.eventImg}
          src="/images/event2.jpeg"
          alt="Wildsync 15/02"
          layout="fill"
        />
      </div>
      <div className={styles.eventInfo}>
        <h3>Wildsync 15.02 at Mezzanine</h3>
      </div>
      <div className={styles.eventActions}>
        <a href="https://ottry.com/events/wildsync?fbclid=PAZXh0bgNhZW0CMTEAAaaPOYWrXiMGNAe9DRTQOEgf85tIp7fH-e1JIpnpGIypjBh_tKeAjNAergQ_aem_qwdI_BJ6cA1FlGG42fQmvA">
          Buy Tickets
        </a>
      </div>
    </div>
  );
}
