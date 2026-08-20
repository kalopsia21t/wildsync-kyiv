"use client";

import styles from "./page.module.css";
import { useLocalization } from "@components/Localization/Localization";

const copy = {
  en: [
    "The story of the WildSync party series began in 2024, when Maze Of Death and Max Kowalski met at the DNA drum and bass party in Podil's HVLV bar. Maze was playing a jungle set from vinyl records, while Max was organizing events of different formats at Mezzanine and looking for something new.",
    "After that party, the idea of holding drum and bass events at Mezzanine was born. Maze invited longtime friends, vinyl selectors who play jungle and drum and bass and bring selections unusual for the local scene. This became the first WildSync resident lineup: DJ Siedin and P.one, later joined by Strictly and Nast-X.",
    "Wildsync held a series of events at Mezzanine and HVLV, presenting authentic underground jungle and drum and bass and introducing audiences to its diverse sound.",
    "In 2026, Wildsync continues this story together with Namir bar, which carries a strong spirit of the city's bass culture. We continue to deliver uncompromising sound while staying focused on the underground scene, vinyl selections, and music beyond the mainstream.",
  ],
  uk: [
    "Історія створення серії вечірок WildSync починається у 2024 році коли на драм-н-бейс вечірці DNA у подільському барі HVLV познайомилися Maze Of Death та Max Kowalski. Maze грав джангл-сет із вінілових платівок, а Max як виявилося, організовував у Mezzanine івенти різних форматів і тоді був у пошуках чогось нового.",
    "Після тієї вечірки зародилася ідея проводити драм-н-бейс івенти в Mezzanine. Maze запросив своїх давніх знайомих — вінілових селекторів, які грають джангл і драм-н-бейс та мають нетипові для локальної сцени селекції. Так сформувався перший резидентський склад WildSync. До нього увійшли DJ Siedin та P.one, а згодом приєдналися Strictly та Nast-X.",
    "Wildsync провів серію івентів у Mezzanine та HVLV, представляючи справжній андерграундний джангл і драм-н-бейс та знайомлячи аудиторію з його різноманітним звучанням.",
    "У 2026 році Wildsync продовжує розвивати цю історію разом із баром Намір, у якому відчувається дуже сильний дух бейс-культури міста. Ми й надалі несемо безкомпромісний саунд, зберігаючи фокус на андеграундній сцені, вінілових селекціях та музиці поза рамками мейнстриму.",
  ],
} as const;

export default function AboutContent() {
  const { language, t } = useLocalization();

  return (
    <article className={styles.about}>
      <h1>{t("aboutTitle")}</h1>
      <div className={styles.copy}>
        {copy[language].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </article>
  );
}
