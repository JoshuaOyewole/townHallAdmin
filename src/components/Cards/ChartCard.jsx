import React, { useState } from "react";
import Style from "./_card.module.scss";
import { IoIosArrowDown } from "react-icons/io";

function ChartCard(props) {

  return (
    <div
      className={`${Style.statCard__chart} ${
        props.extraClass ? props.extraClass : ""
      }`}
    >
      <div className="flex justify-between items-center mb-12">
        <h3 className="font-semibold ">{props.heading && props.heading}</h3>
        <button className={Style.statCard__top_right}>
          {props.stat_type}
          {props.stat_type && <IoIosArrowDown />}
        </button>
      </div>

      <div className={Style.statCard__chart_map}>
        {props.map}
      </div>
    </div>
  );
}

export default ChartCard;
