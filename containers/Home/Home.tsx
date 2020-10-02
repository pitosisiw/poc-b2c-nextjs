import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Navbar } from "../../components/Navbar/Navbar";
import { NavbarLinks } from "../../components/NavbarLinks/NavbarLinks";
import * as styles from "./Home.module.scss";

interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <Layout
      title="Home | Next.js + TypeScript Example"
      navbar={<Navbar middle={<NavbarLinks />} />}
    >
      <main>
        <section className={styles.search}>
          <img src="images/fr-header.jpg" alt="banner picture" />
        </section>
        <section className={styles.text}>
          <h2>We are Swapfiets</h2>
          <p>
            The smart bike subscription. A bike that is always in working order
            and a repair service for a fixed monthly price.
          </p>
        </section>
      </main>
    </Layout>
  );
};
