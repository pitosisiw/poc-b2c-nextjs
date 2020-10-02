import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {Layout} from '../../components/Layout/Layout'
import {Navbar} from '../../components/Navbar/Navbar'
import { cities } from "../../data/cities";
import * as styles from "./Mobility.module.scss";

interface Props {}

export const Mobility: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <Layout
      title="Mobility"
      navbar={<Navbar middle={<p>Select the city to see the offers</p>} />}
    >

    <main className={styles.main}>
      <img
        src="images/fr-product-header.jpg"
        alt="swap image"
        className={styles.background}
      />
      <section className={styles.citySelect}>
        <h1>Select the city:</h1>
        <ul>
          {cities.map((el) => (
            <li key={el.path}>
              <Link href={`${router.pathname}/${el.path}`}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
    </Layout>
  );
};
