import React, { useState } from "react";
import Style from "./_card.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import Chart from "react-apexcharts";

function ChartCard(props) {
  const [josh, setjosh] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })
  const data = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  };
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
        <Chart
          options={josh.options}
          series={josh.series}
          type="bar"
          width="500"
        />
        {/* <Chart
          type="pie"
          width={1349}
          height={550}
          series={[23,24,43,50,65]}
          options={{
            labels:["Hindi", "Math", "English", "Science", "Social Science"]
          }}
        /> */}
      </div>
    </div>
  );
}

export default ChartCard;
