import React, { useEffect } from "react";
import * as d3 from "d3";

const Simple = () => {
  useEffect(() => {
    example();
  }, []);

  const example = () => {
    d3.selectAll("li").text("This is NOT a Test").style("color", "red");
  };

  return (
    <div id="simple">
      <ul>
        <li>This is a Test</li>
        <li>This is a Test</li>
        <li>This is a Test</li>
        <li>This is a Test</li>
      </ul>
    </div>
  );
};

export default Simple;
