import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from "next";
import React from "react";
import { Product } from "../../../containers/Product/Product";
import { products } from "../../../data/products";

type CityQuery = keyof typeof products;

interface Props {
  product: typeof products[keyof typeof products][number];
}

const ProductPage: React.FC<Props> = ({ product }) => {
  return <Product product={product} />;
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = Object.entries(products).reduce((arr, entry) => {
    entry[1].forEach((product) => {
      arr.push({ params: { city: entry[0], product: product.path } });
    });

    return arr;
  }, [] as GetStaticPathsResult["paths"]);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products[params?.city as CityQuery].find(
    (el) => el.path === params?.product
  );
  return { props: { product } };
};
