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
  // {
  //   title: "Strictly - Connector EP",
  //   img: "/images/connector.jpg",
  //   actionSrc:
  //     "https://scaredmoneyrecords.bandcamp.com/album/strictly-connector-ep",
  //   action: "Buy",
  // },
  // {
  //   title: "Tunage w/ Maze of Death @ 20ft Radio - 05/04/2024",
  //   img: "/images/mixcloud.jpg",
  //   actionSrc:
  //     "https://www.mixcloud.com/20ftradio/tunage-w-maze-of-death-20ft-radio-05042024/",
  //   action: "Listen Mix",
  // },
  // {
  //   title: "mazeofdeath at HVLV, Kyiv 28/07/23",
  //   img: "/images/AJ2_005.jpg",
  //   actionSrc:
  //     "https://soundcloud.com/mazeofdeath/maze-of-death-amenjunkies-hvlv-290723",
  //   action: "Listen Mix",
  // },
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
