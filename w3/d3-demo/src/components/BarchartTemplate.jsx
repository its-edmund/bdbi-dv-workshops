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
    const h = 800;
    const length = this.state.data.length;
    const arrayMax = Math.max.apply(
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
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", 100)
      .attr("width", w / length)
      .attr("fill", "tomato");
  }
  render() {
    return <div id="chart"></div>;
  }
}

export default Barchart;
