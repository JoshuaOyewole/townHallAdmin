import React from "react";
import Header from "../../components/Header/Header";
import Style from "./_dashboard.module.scss";
import Card from "../../components/Cards/Card";
import CardMini from "../../components/Cards/CardMini";
import StatCard from "../../components/Cards/StatCard";
function index() {
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
          <CardMini text="--Level 2--"/>
          <CardMini text="--Level 2--"/>
          <CardMini text="--Level 3--"/>
          <Card text="--Level 4--"/>
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
          />
          <StatCard 
            heading="state"
            stat_type="Last 7 days"
            fractions="1/246"
            coverage="0.41% coverage"
          />
          <StatCard 
            heading="lga"
            stat_type="Last 7 days"
            fractions="1/5,392"
            coverage="0.02% coverage"
          />
          <StatCard 
            heading="Wards"
            stat_type="Last 7 days"
            fractions="1/186,131"
            coverage="0% coverage"
          />
          <StatCard 
            heading="Polling Unit"
            stat_type="Last 7 days"
            fractions="1/186,131"
            coverage="0% coverage"
          />
        </div>

       <div className={Style.stats__charts}>
        <div className="flex">
     
        </div>
       </div> 
      </main>
    </div>
  );
}

export default index;
