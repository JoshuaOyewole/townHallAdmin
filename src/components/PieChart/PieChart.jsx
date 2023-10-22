import React from "react";
import { Chart } from "react-google-charts";

function PieChart(props) {
  return (
    <Chart
      chartType={props.chartType}
      width="100%"
      height="400px"
      data={props.data}
      options={props.options}
    />
  );
}

export default PieChart;
