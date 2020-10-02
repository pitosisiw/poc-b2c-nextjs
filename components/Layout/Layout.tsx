import React from "react";
import Head from "next/head";
import { Footer } from "../Footer/Footer";
import * as styles from "./Layout.module.scss";

type Props = {
  title?: string;
  navbar: React.ReactElement;
};

export const Layout: React.FC<Props> = ({
  children,
  title = "This is the default title",
  navbar,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.container}>
      {navbar}
      {children}
      <Footer />
    </div>
  </>
);
