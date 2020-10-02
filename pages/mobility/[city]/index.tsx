import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { City } from "../../../containers/City/City";
import { cities } from "../../../data/cities";
import { products } from "../../../data/products";

type CityQuery = keyof typeof products;

type Props = {
  productList: typeof products[keyof typeof products];
  currentCity: typeof cities[number] | undefined;
};

const CityPage: React.FC<Props> = ({ currentCity, productList }) => {
  return <City productList={productList} currentCity={currentCity} />;
};

export default CityPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = cities.map((city) => ({
    params: { city: city.path },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentCity = cities.find((el) => el.path === params?.city);
  const productList = products[params?.city as CityQuery];

  return { props: { currentCity, productList } };
};
