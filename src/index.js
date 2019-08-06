import React from "react";
import ReactDOM from "react-dom";
import drilldownPie from "./drilldownPie";
import * as d3 from "d3";
import "./styles.css";

function generateData(level) {
  const n = Math.ceil(Math.random() * 10);
  console.log("ddd", n);
  return d3.range(n).map(i => ({
    value: Math.abs(d3.randomNormal(1, 3)()),
    id: `${level}-${i}`,
    children: level > 1 ? generateData(level - 1) : []
  }));
}
function App() {
  const data = generateData(3);
  console.log(data);
  return (
    <div className="App">
      <h1>Hello CodeSandbox !</h1>
      <h2>Drill Down Pie</h2>
      <svg width="500" height="400">
        <drilldownPie data={data} x={250} y={250} />
      </svg>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
