"use client";

import { useLocalization, type Language } from "./Localization";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLocalization();

  return (
    <label className={styles.switcher}>
      <span className={styles.label}>Language</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        aria-label="Select language"
      >
        <option value="en">EN</option>
        <option value="uk">UA</option>
      </select>
    </label>
  );
}
