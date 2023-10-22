import React from "react";
import Header from "../../components/Header/Header";
import Style from "./_dashboard.module.scss";
import Card from "../../components/Cards/Card";
import CardMini from "../../components/Cards/CardMini";
import StatCard from "../../components/Cards/StatCard";
import ChartCard from "../../components/Cards/ChartCard";
import ListCard from "../../components/Cards/ListCard";
import {
  professionalBreakdownData,
  educationBreakdownData,
} from "../../dummyData/professionalBreakdownData";
import PieChart from "../../components/PieChart/PieChart";
import { Sparklines, SparklinesLine } from "react-sparklines";
import ReactApexChart from "react-apexcharts";

function index() {
  const chartData = {
    series: [
      {
        name: "Member",
        data: [
          5, 2, 6, 9, 5, 10, 7, 16, 11, 10, 3, 9, 7, 12, 11, 12, 14, 11, 10, 20,
          23, 12, 23, 15, 26,
        ],
      },
    ],
    options: {
      chart: {
        type: "bar", // You can use "bar" or "column" type for column charts.
      },
      xaxis: {
        categories: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
        ],
      },
    },
  };
  return (
    <div className={Style.dashboard}>
      <Header />
      <hr />
      <main>
        <div className={Style.dashboard__top}>
          <div className={Style.dashboard__top_left}>
            <h6>Overview</h6>
            <h3>Dashboard</h3>
          </div>
          <div className={Style.dashboard__top_right}>
            <button className="bg-[#B0BDEB] px-9 py-[7px] text-black font-medium rounded-md">
              Filter
            </button>
          </div>
        </div>
        <div className={Style.cards_container}>
          <Card text="Organizations" />
          <CardMini text="--Level 2--" />
          <CardMini text="--Level 2--" />
          <CardMini text="--Level 3--" />
          <Card text="--Level 4--" />
        </div>

        <div className={Style.stats}>
          <StatCard
            heading="Total Member"
            stat_type="Last 7 days"
            fractions="1"
          />
          <StatCard
            heading="Countries"
            stat_type="Last 7 days"
            fractions="1/241"
            coverage="0.41% coverage"
            map={
              <Sparklines data={[15, 2, 10, 5, 20, 24, 19]}>
                <SparklinesLine color="blue" />
              </Sparklines>
            }
          />
          <StatCard
            heading="state"
            stat_type="Last 7 days"
            fractions="1/246"
            coverage="0.41% coverage"
            map={
              <Sparklines data={[4, 2, 10, 5, 8, 12, 15, 5, 20]}>
                <SparklinesLine color="blue" />
              </Sparklines>
            }
          />
          <StatCard
            heading="lga"
            stat_type="Last 7 days"
            fractions="1/5,392"
            coverage="0.02% coverage"
            map={
              <Sparklines data={[5, 8, 1, 5, 8, 10, 6, 5, 10]}>
                <SparklinesLine color="blue" />
              </Sparklines>
            }
          />
          <StatCard
            heading="Wards"
            stat_type="Last 7 days"
            fractions="1/186,131"
            coverage="0% coverage"
            map={
              <Sparklines data={[5, 8, 1, 5, 8, 10, 6, 5, 10]}>
                <SparklinesLine color="blue" />
              </Sparklines>
            }
          />
          <StatCard
            heading="Polling Unit"
            stat_type="Last 7 days"
            fractions="1/186,131"
            coverage="0% coverage"
            map={
              <Sparklines data={[5, 8, 1, 5, 8, 10, 6, 5, 10]}>
                <SparklinesLine color="blue" />
              </Sparklines>
            }
          />
        </div>

        <div className={Style.stats__charts}>
          <div className="flex justify-between">
            <ChartCard
              stat_type="Last 7 days"
              heading="New Members"
              map={
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="bar"
                  height={350}
                />
              }
            />
            <ChartCard
              heading="Engagement"
              map={
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="bar"
                  height={350}
                />
              }
            />
          </div>
          <div className="mt-8">
            <ChartCard
              heading="Level Breakdown"
              map={
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="bar"
                  height={350}
                />
              }
            />
          </div>
          <div className="flex justify-between mt-8">
            <ListCard data={professionalBreakdownData} />
            <ListCard data={educationBreakdownData} />
          </div>
          <div className="flex justify-between mt-8">
            <ChartCard
              heading="Gender Breakdown"
              map={
                <PieChart
                  chartType={"PieChart"}
                  data={[
                    ["Gender", "Numbers of Gender"],
                    ["Men", 11],
                    ["Women", 10],
                    ["Others", 3],
                  ]}
                  option={{
                    title: "Gender Breakdown",
                    pieHole: 0.4,
                    is3D: false,
                  }}
                />
              }
            />
            <ChartCard
              heading="Age Distribution"
              map={
                <PieChart
                  chartType={"PieChart"}
                  data={[
                    ["Gender", "Numbers of Gender"],
                    ["18-25", 11],
                    ["26-40", 10],
                    ["41-45", 7],
                    ["Above 55", 3],
                  ]}
                  option={{
                    title: "Gender Breakdown",
                    pieHole: 0.4,
                    is3D: false,
                  }}
                />
              }
            />
          </div>
        </div>
      </main>

      <div></div>
    </div>
  );
}

export default index;
