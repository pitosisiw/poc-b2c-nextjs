import React from "react";

interface Props {
  className?: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = (props) => (
  <button className={props.className} onClick={props.onClick}>
    BUY!
  </button>
);
