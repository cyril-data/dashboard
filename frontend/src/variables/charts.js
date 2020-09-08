/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // Chart variables
// #############################

// chartExample1 and chartExample2 options
import React, { useState, useEffect } from 'react';


function option() {
  // const [dragClientX, setdragClientX] = useState(0);

  let chart1_2_options = {
    
    dragData: true,
    dragX: true,

    onDragStart: function(e, element) {
      console.log( "onDragStart" , element._datasetIndex);
    },
    onDrag: function(e, datasetIndex, index, value) {
      // update the point left and right of clicked point
      // if the first point is clicked, only update the point to the right
      if (index === 0) {
        console.log( "onDrag index " ,datasetIndex, index, value);
      // if the last point is clicked, only update the point before
      } else {
      // all other cases
        console.log( "onDrag else" ,datasetIndex, index, value);
        // setdragX(value.x)
      }
      //console.log(datasetIndex, index, value)
    },
    onDragEnd: function(e, datasetIndex, index, value) {
      console.log(datasetIndex, index, value)
    },
    // dragDataRound: 0, // round to full integers (0 decimals)
    maintainAspectRatio: false,
    legend: {
      display: true
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 1,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 10.,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            callback: function(value, index, values) {
                return parseFloat(value).toFixed(2);
            },
            suggestedMin: 0,
            suggestedMax: 1,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ]
    }
  };
  return chart1_2_options
}

const closest = (needle, haystack) => {
  return haystack.reduce((a, b) => {
      let aDiff = Math.abs(a - needle);
      let bDiff = Math.abs(b - needle);

      if (aDiff == bDiff) {
          return a > b ? a : b;
      } else {
          return bDiff < aDiff ? b : a;
      }
  });
}

// const [dragXClient, setdragXClient] = useState(0);

let chartDoughnutOption = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  rotation: 1 * Math.PI,
  circumference: 1 * Math.PI,
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true
};



// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
export const chart = (knnPred0Feature, knnPred1Feature, clientFeature) => {

  const chartExample1 = {
    data: canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(66,134,121,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)");
      gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors

      let gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke2.addColorStop(1, "rgba(235,37,9,0.2)");
      gradientStroke2.addColorStop(0.4, "rgba(235,37,9,0.0)");
      gradientStroke2.addColorStop(0, "rgba(235,37,9,0)"); //blue colors

      const gridX = knnPred0Feature?knnPred0Feature.x:[0];
      const pred0 = knnPred0Feature?knnPred0Feature.y:[];
      const pred1 = knnPred1Feature?knnPred1Feature.y:[];


      var numbers = [65, 44, 12, 4];

      function dataPred0(num, index) {
        return {x:num, y:pred0[index]};
      }
      function dataPred1(num, index) {
        return {x:num, y:pred1[index]};
      }

      const dataScatter0 = gridX.map(dataPred0)
      const dataScatter1 = gridX.map(dataPred1)
      
      gridX?console.log("closest", closest(0.5,gridX)):console.log("closest");

      // const clientBar = gridX.map((number, index) => number==closest(clientFeature,gridX)? Math.max(Math.max(...pred1),Math.max(...pred0)) :0);
      // const clientBar = [0.5,Math.max(Math.max(...pred1),Math.max(...pred0)), 56, 0.98]
      const clientBar = [{x:clientFeature, y:Math.max(Math.max(...pred1),Math.max(...pred0))}];

      return {
        // labels: gridX,
        datasets: [
          {
            label: "granted",
            dragData: false,
            fill: true,
            showLine: true,
            backgroundColor: gradientStroke,
            borderColor: "#00d6b4",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#00d6b4",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: dataScatter0,
          }, 
          {
            label: "refused",
            dragData: false,
            fill: true,
            showLine: true,
            backgroundColor: gradientStroke2,
            borderColor: "#eb2509",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBorderColor: "rgba(0,0,0,0)",
            pointHoverBackgroundColor: "#eb2509",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: dataScatter1,
          }, 
          {
            label: "Client",
            fill: true,
            borderColor: "white",
            pointBorderColor: "white",
            pointHoverBackgroundColor: "white",
            pointHoverRadius: 4,
            // pointHoverBorderWidth: 15,
            pointRadius: 4,
            pointBorderWidth: 8,
            data: clientBar
          }, 
        ]
      };
    },
    // options: chart1_2_options
  };
  let chart1_2_options = option()
  // console.log("knnPred0Feature", knnPred0Feature)
  return [chartExample1.data, chart1_2_options]
}

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
export const chartDoughnut = (clientProba, thserold) => {

  const doughnut = {
    data: canvas => {
      return {
        labels: [clientProba<=thserold?"granted":"refused", ""],
        datasets: [
          {
            // label: "My First dataset",
            // fill: true,
            backgroundColor: [clientProba<=thserold?"#00d6b4":"#eb2509" ,"#cccccc"],
            overBackgroundColor: [
              "#00d6b4",
              "#cccccc",
            ],
            data: [clientProba, 1-clientProba],
          },
        ]
      };
    },
  };
  // console.log("knnPred0Feature", knnPred0Feature)
  return [doughnut.data, chartDoughnutOption]
}

// module.exports = {
//   chart, // in src/views/Dashboard.js
//   chartDoughnut, // in src/views/Dashboard.js
// };
