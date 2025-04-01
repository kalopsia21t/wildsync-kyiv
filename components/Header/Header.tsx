import styles from "./Header.module.css";

import DropdownMenu from "@components/DropdownMenu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div> Wildsync</div>
      <div>
        <DropdownMenu />
      </div>
    </header>
  );
}
