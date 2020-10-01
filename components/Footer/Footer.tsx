import React from "react";
import * as styles from "./Footer.module.scss";

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  );
};
