import React from "react";
import Style from "./_card.module.scss";
import {IoIosArrowDown} from "react-icons/io"

function StatCard(props) {
  return (
    <div className={Style.statCard}>
      <div className={Style.statCard__top}>
        <div className={Style.statCard__top_left}>{props.heading}</div>
        <button className={Style.statCard__top_right}>
          {props.stat_type}
          <IoIosArrowDown />
        </button>
      </div>
      <div className={Style.statCard__details}>
        <h3 className={Style.statCard__detailsFraction}>{props.fractions}</h3>
        <p className={Style.statCard__detailsCoverage}>{props.coverage}</p>
      </div>
      <div className={Style.statCard__map}>Map</div>
    </div>
  );
}

export default StatCard;
