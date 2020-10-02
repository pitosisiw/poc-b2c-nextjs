import Link from "next/link";
import React from "react";
import * as styles from "./Navbar.module.scss";

interface Props {
  middle: React.ReactElement;
  right?: React.ReactElement;
}

export const Navbar: React.FC<Props> = ({ middle, right }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <img
            src="/icons/brand-legacy.svg"
            alt="swapfiets logo"
            aria-hidden={true}
            className={styles.icon}
          />
        </Link>
        {middle}
        {right}
      </nav>
    </header>
  );
};
