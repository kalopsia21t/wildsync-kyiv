import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getEventBySlug } from "../../../data/events";
import styles from "@styles/events.module.css";

type Props = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: Props) {
  const {slug} = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return notFound();
  }

  return (
    <div className={styles.eventDetailPage}>
      <Link href="/events" className={styles.backLink}>
        ← Back to events
      </Link>

      <div className={styles.eventDetailCard}>
        <div className={styles.eventDetailImageWrap}>
          <Image
            src={event.img}
            alt={event.title}
            width={900}
            height={1200}
            className={styles.eventDetailImage}
          />
        </div>

        <div className={styles.eventDetailContent}>
          <p className={styles.eventDetailMeta}>{event.date}</p>
          <h1>{event.title}</h1>
          <p className={styles.eventDetailMeta}>{`Location: ${event.location}`}</p>
          <p className={styles.eventDetailDescription}>{event.description}</p>
          <p className={styles.eventDetailMeta}>{`Lineup: ${event.lineup}`}</p>
        </div>
      </div>
    </div>
  );
}
