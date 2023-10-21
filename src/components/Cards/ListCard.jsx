import React from "react";
import List from "../List/List.jsx"
import Style from "./_card.module.scss";

function ListCard(props) {
  return (
    <div className="bg-[#fff] px-8 rounded-lg pt-6 pb-8 basis-[49%]">
      <h3 className="font-semibold mb-7">
        {props.data.title}
      </h3>
      <div className="flex justify-between items-center px-4">
        {props.data.heading.map((title, index) => {
          return <h5 className="font-semibold text-sm" key={index}>{title}</h5>;
        })}
      </div>
      {props.data.data.map((data, index) => {
        return (
          <List
            occupation={data.occupation}
            membership={data.membership}
            key={index}
          />
        );
      })}
      <div className="flex justify-end items-center text-base font-medium">
        <button>See more...</button>
      </div>
    </div>
  );
}

export default ListCard;
