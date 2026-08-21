"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./DropdownMenu.module.css";

import { Menu, X } from "lucide-react";
import { useLocalization } from "@components/Localization/Localization";
import LanguageSwitcher from "@components/Localization/LanguageSwitcher";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLocalization();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOnMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    toggleMenu();
  };

  const menuLinks = (
    <>
      <Link href="/" className={styles.menuItem}>{t("home")}</Link>
      <Link href="/events" className={styles.menuItem}>{t("events")}</Link>
      <Link href="/media" className={styles.menuItem}>{t("media")}</Link>
      <Link href="/mixes" className={styles.menuItem}>{t("mixes")}</Link>
      <Link href="/about" className={styles.menuItem}>{t("about")}</Link>
    </>
  );

  return (
    <div className={styles.dropdown}>
      <nav className={styles.desktopMenu}>{menuLinks}</nav>
      <button onClick={toggleMenu} className={styles.button}>
        {isOpen ? <X size={48} /> : <Menu size={48} />}
      </button>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.menu} onClick={handleClickOnMenu}>
            {menuLinks}
            <div className={styles.mobileLanguage} onClick={(event) => event.stopPropagation()}>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
