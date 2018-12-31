import React from "react";
import Header from "../component/header";
import "../static/scss/styles.scss";

const layout = props => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default layout;
