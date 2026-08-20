import Widget from "@components/Widget";
import styles from "@styles/events.module.css";
import { events } from "../../data/events";
import LocalizedText from "@components/Localization/LocalizedText";

export default function Events() {
  return (
    <div className={styles.eventsContainer}>
      <div className={styles.eventsHeader}>
        <h1><LocalizedText translationKey="events" /></h1>
        <p><LocalizedText translationKey="eventsIntro" /></p>
      </div>
      <div className={styles.event}>
        {events.map((event: (typeof events)[number]) => {
          return <Widget key={event.slug} {...event} actionSrc={`/events/${event.slug}`} />;
        })}
      </div>
    </div>
  );
}
