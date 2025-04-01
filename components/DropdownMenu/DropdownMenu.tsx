"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./DropdownMenu.module.css";

import { Menu, X } from "lucide-react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOnMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    toggleMenu();
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleMenu} className={styles.button}>
        {isOpen ? <X size={48} /> : <Menu size={48} />}
      </button>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.menu} onClick={handleClickOnMenu}>
            <Link href="/" className={styles.menuItem}>
              Home
            </Link>
            <Link href="/events" className={styles.menuItem}>
              Events
            </Link>
            <Link href="/about" className={styles.menuItem}>
              About Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
