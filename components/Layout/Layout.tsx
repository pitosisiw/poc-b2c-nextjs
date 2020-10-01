import React from "react";
import Head from "next/head";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import * as styles from "./Layout.module.scss";

type Props = {
  title?: string;
};

export const Layout: React.FC<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
    <Footer />
  </div>
);
