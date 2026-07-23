import Image from "next/image";
import styles from "./Header.module.css";

import DropdownMenu from "@components/DropdownMenu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Image src="/images/wildsync_white.png" alt="Wildsync" width={280} height={30}/>
      </div>
      <div>
        <DropdownMenu />
      </div>
    </header>
  );
}
