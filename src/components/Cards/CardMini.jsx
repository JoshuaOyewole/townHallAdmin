import React from "react";
import Style from "./_card.module.scss";

function CardMini(props) {
  return (
    <button className={Style.card}>
      <span className={Style.card_span}>{props.text}</span>
    </button>
  );
}

export default CardMini;
