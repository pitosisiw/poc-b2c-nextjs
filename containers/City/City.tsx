import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Navbar } from "../../components/Navbar/Navbar";
import { cities } from "../../data/cities";
import { products } from "../../data/products";
import * as styles from "./City.module.scss";

interface Props {
  productList: typeof products[keyof typeof products];
  currentCity: typeof cities[number] | undefined;
}

export const City: React.FC<Props> = ({ productList, currentCity }) => {
  const router = useRouter();

  return (
    <Layout
      title="Mobility"
      navbar={
        <Navbar
          middle={<p>See all the bikes available now in {currentCity?.name}</p>}
        />
      }
    >
      <main>
        <section className={styles.list}>
          <ul>
            {productList.map((product) => (
              <li key={product.path}>
                <Link href={`${router.asPath}/${product.path}`}>
                  <a>
                    <img
                      src={"/images/" + product.picture}
                      alt={product.name}
                    />
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
};
