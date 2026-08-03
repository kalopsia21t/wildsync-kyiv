import Widget from "@components/Widget";
import styles from "@styles/events.module.css";

const events = [
  {
    title: "Wildsync 05/07/2026 (Namir)",
    img: "/posters/05_07_2026_Namir.png",
  },
  {
    title: "Wildsync 24/04/2026 (Namir)",
    img: "/posters/24_04_2026_Namir.jpg",
  },
  {
    title: "Wildsync 10/08/2025 (HVLV)",
    img: "/posters/10_08_2025_HVLV.jpg",
  },
  {
    title: "Wildsync 20/06/2025 (Mezzanine)",
    img: "/posters/20_06_2025_Mezzanine.png",
  },
  {
    title: "Wildsync 10/05/2025 (Mezzanine)",
    img: "/posters/10_05_2025_Mezzanine.jpg",
  },
  {
    title: "Wildsync 15/02/2025 (Mezzanine)",
    img: "/posters/15_02_2025_Mezzanine.jpeg",
  },
];

export default function Events() {
  return (
    <div className={styles.event}>
      {events.map((event, index) => {
        return <Widget key={`event-widget-${index}`} {...event} />;
      })}
    </div>
  );
}
