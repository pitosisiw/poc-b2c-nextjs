import Link from "next/link";
import React from "react";
import { globalLinks } from "../../data/global-links";
import * as styles from "./NavbarLinks.module.scss"

export const NavbarLinks: React.FC = () => {
  return (
    <div className={styles.list}>
      {globalLinks.map((el) => (
        <li key={el.path}>
          <Link href={el.path}>{el.name}</Link>
        </li>
      ))}
    </div>
  );
};
