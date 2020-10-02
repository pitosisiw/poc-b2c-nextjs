import Link from "next/link";
import React from "react";
import { globalLinks } from "../../data/global-links";
import * as styles from "./Footer.module.scss";

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <p>I am a happy footer</p>
      <ul>
        {globalLinks.map((el) => (
          <li key={el.path}>
            <Link href={el.path}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
