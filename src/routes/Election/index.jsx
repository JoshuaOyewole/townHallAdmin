import React from "react";
import Header from "../../components/Header/Header";
import Style from "../Dashboard/_dashboard.module.scss";

function index() {
  return (
    <>
      <Header />
      <div className={Style.dashboard__top}>
        <div className={Style.dashboard__top_left}>
          <h6>Overview</h6>
          <h3>Election</h3>
        </div>
      </div>
    </>
  );
}

export default index;
