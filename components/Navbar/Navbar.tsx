import Link from 'next/link'
import React from "react";

interface Props {}

export const Navbar: React.FC<Props> = () => {
  return (
    <nav>
      <img src="/icons/brand-legacy.svg" alt="swapfiets logo" aria-hidden={true}/>
      {/*<Link to={}>Account</Link>*/}
    </nav>
  );
};
