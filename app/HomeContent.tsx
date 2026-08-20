"use client";

import styles from "./page.module.css";
import { useLocalization } from "@components/Localization/Localization";

export default function HomeContent() {
  const { language } = useLocalization();

  return (
    <div className={styles.mainInfo}>
      {language === "uk"
        ? "Wildsync — це спільнота діджеїв і рейверів з Києва, об'єднаних спільною місією презентувати та розвивати андеграундний хардкорний джангл і драм-н-бейс. Наші події відомі DIY-підходом та відкритою атмосферою — цінностями, що лежать в основі андеграундної музичної культури."
        : "Wildsync is a community of DJs and ravers from Kyiv, Ukraine, united by a shared mission to showcase and promote underground hardcore jungle and drum & bass. Our events are known for their DIY approach and inclusive vibe — core values that are the foundation of underground music culture."}
    </div>
  );
}
