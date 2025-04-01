import Image from "next/image";

import styles from "@styles/events.module.css";

type WidgetT = {
  title: string;
  img: string;
  actionSrc: string;
  action: string;
};

export default function Widget({ title, img, actionSrc, action }: WidgetT) {
  return (
    <div className={styles.eventCard}>
      <div className={styles.eventImgContainer}>
        <Image
          className={styles.eventImg}
          src={img}
          alt="Wildsync 15/02"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.eventInfo}>
        <h3>{title}</h3>
      </div>
      <div className={styles.eventActions}>
        <a href={actionSrc}>{action}</a>
      </div>
    </div>
  );
}
