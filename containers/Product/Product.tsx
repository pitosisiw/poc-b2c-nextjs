import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Navbar } from "../../components/Navbar/Navbar";
import { NavbarLinks } from "../../components/NavbarLinks/NavbarLinks";
import { products } from "../../data/products";
import * as styles from "./Product.module.scss";

interface Props {
  product: typeof products[keyof typeof products][number];
}

export const Product: React.FC<Props> = ({ product }) => {
  const onClick = () => {
    alert("You bought the bike!");
  };

  return (
    <Layout
      title=""
      navbar={
        <Navbar
          middle={<NavbarLinks />}
          right={
            <button className={styles.buy} onClick={onClick}>
              BUY!
            </button>
          }
        />
      }
    >
      <main>
        <section className={styles.product}>
          <img src={"/images/" + product.picture} alt={product.name} />
          <div>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <button className={styles.buy} onClick={onClick}>
              BUY!
            </button>
          </div>
        </section>
      </main>
    </Layout>
  );
};
