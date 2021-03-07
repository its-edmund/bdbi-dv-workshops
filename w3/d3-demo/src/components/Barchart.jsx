import React, { Component } from "react";
import axios from "axios";
import * as d3 from "d3";

class Barchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const data = await axios.get(
      "https://api.covidtracking.com/v1/states/current.json"
    );
    this.setState({ data: data.data });
    this.drawChart();
  }

  drawChart() {
    const w = 1000;
    const h = 1000;
    const length = this.state.data.length;
    const arrayMax =
      30 +
      Math.max.apply(
        Math,
        this.state.data.map(function (o) {
          return o.positive;
        })
      );

    let chartDrawing = d3
      .select("#chart")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("background-color", "#ccc")
      .style("padding", 10)
      .style("margin-left", 50);

    chartDrawing
      .selectAll("rect")
      .data(this.state.data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => {
        return i * (w / length);
      })
      .attr("y", (d) => {
        return h - (d.positive / arrayMax) * h;
      })
      .attr("height", (d) => {
        return (d.positive / arrayMax) * h;
      })
      .attr("width", w / length)
      .attr("fill", "tomato");

    chartDrawing
      .selectAll("text")
      .data(this.state.data)
      .enter()
      .append("text")
      .attr("x", (d, i) => {
        return i * (w / length);
      })
      .attr("y", (d) => {
        return h - (d.positive / arrayMax) * h - 5;
      })
      .style("font-size", 15)
      .text((d) => {
        return d.state;
      });
  }
  render() {
    return <div id="chart"></div>;
  }
}

export default Barchart;
