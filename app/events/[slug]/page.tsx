import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getEventBySlug } from "@utils/getEventBySlug";
import { events } from "@data/events";
import styles from "@styles/events.module.css";
import LocalizedText from "@components/Localization/LocalizedText";

type Props = {
  params: Promise<{slug: string}>;
};

export default async function EventPage({ params }: Props) {
  const {slug} = await params;
  const event = getEventBySlug(events, slug);

  if (!event) {
    return notFound();
  }

  return (
    <div className={styles.eventDetailPage}>
      <Link href="/events" className={styles.backLink}>
        ← <LocalizedText translationKey="backToEvents" />
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
          <p className={styles.eventDetailMeta}><LocalizedText translationKey="location" />: {event.location}</p>
          <p className={styles.eventDetailDescription}>{event.description}</p>
          <p className={styles.eventDetailMeta}><LocalizedText translationKey="lineup" />: {event.lineup}</p>
          <p className={styles.eventDetailMeta}><LocalizedText translationKey="posterAuthor" />: {event.posterAuthor}</p>
        </div>
      </div>
    </div>
  );
}
