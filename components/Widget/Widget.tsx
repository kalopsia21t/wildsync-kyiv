import Image from "next/image";
import Link from "next/link";

import styles from "./Widget.module.css";

type WidgetT = {
  title: string;
  img: string;
  actionSrc: string;
  action: string;
  pageUrl: string;
  postId: string;
};

export default function Widget({
  title,
  img,
  actionSrc,
  action,
  postId,
  pageUrl = "news",
}: WidgetT) {
  return (
    <div className={styles.widget}>
      <div className={styles.widgetImgContainer}>
        <Image
          className={styles.widgetImg}
          src={img}
          alt="Wildsync 15/02"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.widgetInfo}>
        <h3>
          <Link href={`/${pageUrl}/${postId}`}>{title}</Link>
        </h3>
      </div>
      <div className={styles.widgetActions}>
        <a href={actionSrc}>{action}</a>
      </div>
    </div>
  );
}
