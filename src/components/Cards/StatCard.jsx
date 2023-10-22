import React, { useState } from "react";
import Style from "./_card.module.scss";
import { IoIosArrowDown } from "react-icons/io";


function StatCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [statType, setStatType] = useState(props.stat_type);

  const handleStatType = (e) => {
    setIsOpen(!isOpen);
  };

  const handleStatSelect = (e) => {
    setStatType(e.target.innerText);
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${Style.statCard} relative min-h-[10rem]`}>
      <div className={Style.statCard__top}>
        <div className={Style.statCard__top_left}>{props.heading}</div>
        <button className={Style.statCard__top_right} onClick={handleStatType}>
          {statType}
          <IoIosArrowDown />
        </button>
      </div>
      {isOpen && (
        <div className="modal bg-[#FFFFFF] border-[#D9D9D9] border rounded text-sm font-medium w-[55%] absolute top-8 right-3">
          <div className="flex flex-col justify-center items-start text-[#667382]">
            <button
              className="hover:bg-slate-100 w-full text-left px-3 py-2 rounded-sm"
              onClick={handleStatSelect}
            >
              Last 7 days
            </button>
            <button
              className="hover:bg-slate-100 w-full text-left px-3 py-2 rounded-sm"
              onClick={handleStatSelect}
            >
              Last 30 Months
            </button>
            <button
              className="hover:bg-slate-100 w-full text-left px-3 py-2 rounded-sm"
              onClick={handleStatSelect}
            >
              Last 3 Months
            </button>
          </div>
        </div>
      )}
      <div className={Style.statCard__details}>
        <h3 className={Style.statCard__detailsFraction}>{props.fractions}</h3>
        <p className={Style.statCard__detailsCoverage}>{props.coverage}</p>
      </div>
      <div className={Style.statCard__map}>
        {props.map}
      </div>
    </div>
  );
}

export default StatCard;
