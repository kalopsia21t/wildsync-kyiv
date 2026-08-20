import Widget from "@components/Widget";
import styles from "@styles/events.module.css";
import { events } from "../../data/events";

export default function Events() {
  return (
    <div className={styles.eventsContainer}>
      <div className={styles.eventsHeader}>
        <h1>Events</h1>
        <p>Check out our upcoming and past events!</p>
      </div>
      <div className={styles.event}>
        {events.map((event: (typeof events)[number]) => {
          return <Widget key={event.slug} {...event} actionSrc={`/events/${event.slug}`} action="View event" />;
        })}
      </div>
    </div>
  );
}
