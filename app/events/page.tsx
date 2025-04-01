import Widget from "@components/Widget";
import styles from "@styles/events.module.css";

const events = [
  {
    title: "Event1",
    img: "href1",
    ticketsSrc: "otttry",
  },
  {
    title: "Event2",
    img: "href1",
    ticketsSrc: "otttry",
  },
  {
    title: "Event3",
    img: "href1",
    ticketsSrc: "otttry",
  },
  {
    title: "Event4",
    img: "href1",
    ticketsSrc: "otttry",
  },
  {
    title: "Event5",
    img: "href1",
    ticketsSrc: "otttry",
  },
];

export default function Events() {
  return (
    <div className={styles.event}>
      {events.map((event, index) => {
        return <Widget key={`event-widget-${index}`} />;
      })}
    </div>
  );
}
