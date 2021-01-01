import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Card from "./Card";
import SData from "./SData";

let dataInfo = (val) => {
  return (
    <Card
      key={val.id}
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
};

ReactDOM.render(
  <>
    <h1 className="heading">List of top 5 netflix series</h1>
    {SData.map(dataInfo)};
  </>,
  document.getElementById("root")
);
