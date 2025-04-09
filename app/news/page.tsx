import Widget from "@components/Widget";
import styles from "@styles/events.module.css";

import { postMocks } from "../../utils/postMocks";

export default function News() {
  return (
    <div className={styles.event}>
      {postMocks.map((event, index) => {
        return (
          <Widget key={`event-widget-${index}`} {...event} pageUrl="news" />
        );
      })}
    </div>
  );
}
