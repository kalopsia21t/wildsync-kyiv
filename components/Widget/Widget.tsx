import Image from "next/image";
import Link from "next/link";

import LocalizedText from "@components/Localization/LocalizedText";

import { isUpcomingEvent } from "@data/events";
import styles from "@styles/events.module.css";

type WidgetT = {
  title: string;
  img: string;
  date: string;
  actionSrc?: string;
  action?: string;
};

export default function Widget({ title, img, date, actionSrc, action }: WidgetT) {
  const cardContent = (
    <div className={styles.eventCardContent}>
      {isUpcomingEvent(date) && (
         <span className={styles.upcomingTag}>
           <LocalizedText translationKey={"upcoming"} />
         </span>
      )}
      <div className={styles.eventImgContainer}>
        <Image
          className={styles.eventImg}
          src={img}
          alt={title}
          width={720}
          height={980}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={false}
        />
      </div>

      <div className={styles.eventInfo}>
        <h3>{title}</h3>
      </div>

      {action && (
        <div className={styles.eventActions}>
          <span>{action}</span>
        </div>
      )}
    </div>
  );

  if (actionSrc) {
    return <Link href={actionSrc} className={styles.eventCard}>{cardContent}</Link>;
  }

  return <article className={styles.eventCard}>{cardContent}</article>;
}
