"use client";

import styles from "@styles/mixes.module.css";
import { useLocalization } from "@components/Localization/Localization";

export default function MixMeta({ date, index }: { date: string; index: number }) {
  const { language, t } = useLocalization();
  const formattedDate = new Date(date).toLocaleDateString(language === "uk" ? "uk-UA" : "en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const tag = index === 0 ? t("mixLatest") : index === 1 ? t("mixArchive") : t("mixSet");

  return <span className={styles.mixDate}>{tag} — {formattedDate}</span>;
}
