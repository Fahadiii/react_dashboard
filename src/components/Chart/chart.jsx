import React, { useState } from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Charts = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Assigned Tasks",
      fontSize: 24,
      fontWeight: 600,
      fontColor: "#445865",
      fontFamily: "SFProDisplay",
      horizontalAlign: "left",
      padding: 10,
    },
    axisY: {
      title: "No. of tasks",
      includeZero: true,
      gridThickness: 0,
    },
    toolTip: {
      shared: true,
      reversed: true,
      fontSize: 10,
      fontWeight: 400,
      fontColor: "#445865",
      fontFamily: "SFProDisplay",
    },
    legend: {
      verticalAlign: "center",
      horizontalAlign: "right",
      reversed: true,
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 400,
      fontColor: "#445865",
      fontFamily: "SFProDisplay",
    },
    dataPointMaxWidth: 35,
    data: [
      {
        type: "stackedColumn",
        name: "Completed",
        color: "#30ce98",
        showInLegend: true,
        dataPoints: [
          { label: "User1", y: 10 },
          { label: "User2", y: 8 },
          { label: "User3", y: 14 },
          { label: "User4", y: 13 },
          { label: "User5", y: 13 },
          { label: "User6", y: 13 },
          { label: "User7", y: 5 },
          { label: "User8", y: 14 },
        ],
      },
      {
        type: "stackedColumn",
        name: "OnGoing",
        color: "#f6be48",
        showInLegend: true,
        yValueFormatString: "#,###k",
        dataPoints: [
          { label: "User1", y: 13 },
          { label: "User2", y: 13 },
          { label: "User3", y: 15 },
          { label: "User4", y: 16 },
          { label: "User5", y: 17 },
          { label: "User6", y: 17 },
          { label: "User7", y: 18 },
          { label: "User8", y: 18 },
        ],
      },
      {
        type: "stackedColumn",
        name: "Pending",
        color: "#d3382c",
        showInLegend: true,
        yValueFormatString: "#,###k",
        dataPoints: [
          { label: "User1", y: 13 },
          { label: "User2", y: 13 },
          { label: "User3", y: 15 },
          { label: "User4", y: 15 },
          { label: "User5", y: 15 },
          { label: "User6", y: 15 },
          { label: "User7", y: 16 },
          { label: "User8", y: 17 },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {
        //You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods/
      }
    </div>
  );
};

export default Charts;
