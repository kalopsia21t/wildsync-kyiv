import Widget from "@components/Widget";
import styles from "@styles/events.module.css";

const events = [
  {
    title: "Wildsync 15.02 at Mezzanine",
    img: "/images/event2.jpeg",
    actionSrc:
      "https://ottry.com/events/wildsync?fbclid=PAZXh0bgNhZW0CMTEAAaaPOYWrXiMGNAe9DRTQOEgf85tIp7fH-e1JIpnpGIypjBh_tKeAjNAergQ_aem_qwdI_BJ6cA1FlGG42fQmvA",
    action: "Buy Tickets",
  },
  {
    title: "Strictly - Connector EP",
    img: "/images/connector.jpg",
    actionSrc:
      "https://scaredmoneyrecords.bandcamp.com/album/strictly-connector-ep",
    action: "Buy",
  },
  {
    title: "Tunage w/ Maze of Death @ 20ft Radio - 05/04/2024",
    img: "/images/mixcloud.jpg",
    actionSrc:
      "https://www.mixcloud.com/20ftradio/tunage-w-maze-of-death-20ft-radio-05042024/",
    action: "Listen Mix",
  },
  {
    title: "mazeofdeath at HVLV, Kyiv 28/07/23",
    img: "/images/AJ2_005.jpg",
    actionSrc:
      "https://soundcloud.com/mazeofdeath/maze-of-death-amenjunkies-hvlv-290723",
    action: "Listen Mix",
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
