'use client';
import styles from "@styles/events.module.css";
import LocalizedText from "@components/Localization/LocalizedText";
import { useLocalization } from "@components/Localization/Localization";
import { events } from "@data/events";


export default function EventDetails({ event }: { event: (typeof events)[number]; }) {
    const { language } = useLocalization();
  
    return (
        <div className={styles.eventDetailContent}>
          <p className={styles.eventDetailMeta}>{event.date}</p>
          <h1>{event.title}</h1>
          <p className={styles.eventDetailMeta}><LocalizedText translationKey="location" />: <a href={event.location.link} target="_blank" rel="noopener noreferrer">{event.location.title}</a></p>
          <p className={styles.eventDetailDescription}>{event.description[language]}</p>
          <p className={styles.eventDetailMeta}><LocalizedText translationKey="lineup" />: {event.lineup}</p>
          <p className={styles.eventDetailMeta}><LocalizedText translationKey="posterAuthor" />: {event.posterAuthor}</p>
        </div>
    );
}