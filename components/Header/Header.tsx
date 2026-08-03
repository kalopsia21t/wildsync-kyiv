import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.css";

import DropdownMenu from "@components/DropdownMenu";


export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/images/wildsync_white.png" alt="Wildsync" width={280} height={30}/>
      </Link>
      <div>
        <DropdownMenu />
      </div>
    </header>
  );
}
