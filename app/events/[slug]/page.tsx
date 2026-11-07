import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

import { getEventBySlug } from "@utils/getEventBySlug";
import { events } from "@data/events";
import styles from "@styles/events.module.css";
import LocalizedText from "@components/Localization/LocalizedText";
import EventDetails from "./eventDetails";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const eventTitle = events.find((event) => event.slug === slug)?.title;
  
  return {
    title: {
      default: eventTitle || "Event",
      template: "%s | Wildsync Kyiv",
    },
    description: "Underground Jungle, Drum & Bass, Breakbeat and Bass music event in Kyiv.",
    alternates: {
      canonical: `https://wildsynckyiv.com/events/${slug}`,
    },
  };
}

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

        <EventDetails event={event} />
      </div>
    </div>
  );
}
