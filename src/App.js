import React from "react";
import Header from "./component/Header";
import Body from "./component/Body";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1
          style={{
            marginLeft: "0px",
            marginTop: "20px",
            width: "100%",
            background: "#12c2e9",
            background:
              " -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9)",
            background: "linear-gradient(to right, #f64f59, #c471ed, #12c2e9)",
          }}
        >
          {" "}
          Portfolio
        </h1>
        <Header />
        <Body />
      </div>
    );
  }
}
