import React from "react";
import {Button} from '../../components/Button/Button'
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
    alert(`You bought the bike!`);
  };

  const className = styles.buy

  return (
    <Layout
      title={product.name}
      navbar={
        <Navbar
          middle={<NavbarLinks/>}
          right={
            <Button onClick={onClick} className={className}/>
          }
        />
      }
    >
      <main>
        <section className={styles.product}>
          <img src={"/images/" + product.picture} alt={product.name}/>
          <div>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <Button onClick={onClick}/>
          </div>
        </section>
      </main>
    </Layout>
  );
};
