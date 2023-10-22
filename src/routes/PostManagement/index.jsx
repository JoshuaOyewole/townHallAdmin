import React from "react";
import Header from "../../components/Header/Header";
import Style from "../Dashboard/_dashboard.module.scss";
import { PrimaryButton } from "../../components/Button/Button";

function index() {
  return (
    <>
      <Header />
      <div className={Style.dashboard__top}>
        <div className={Style.dashboard__top_left}>
          <h6>Overview</h6>
          <h3>Post Management</h3>
        </div>
        <div className={Style.dashboard__top_right}>
          <PrimaryButton title="Filter" />
        </div>
      </div>
    </>
  );
}

export default index;
