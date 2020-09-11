import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
// import './App.css';

// nodejs library that concatenates classes
import classNames from "classnames";
// // react plugin used to create charts
import { Line, Bar , Doughnut, Scatter} from "react-chartjs-2";

// import Chart from 'chart.js'
// load the options file externally for better readability of the component.
// In the chartOptions object, make sure to add "dragData: true" etc.
// import chartOptions from '~/assets/js/labour.js'
import 'chartjs-plugin-dragdata'

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Form,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";


// // core components
// import {
//   chart,
//   chartDoughnut,
//   // chartExample2,
//   // chartExample3,
//   // chartExample4
// } from "./variables/charts.js";


function App() {

  const [dataLoaded, setdataLoaded] = useState(0);
  const [clientInfo, setclientInfo] = useState(0);
  const [knnPred0, setknnPred0] = useState({});
  const [knnPred1, setknnPred1] = useState({});
  const [idClient, setIdClient] = useState(0);
  const [bigChartData, setBigChartData] = useState("EXT_SOURCE_1");
  const [drag, setDrag] = useState(0);
  const [dragExtS1, setDragExtS1] = useState(0);
  const [dragExtS2, setDragExtS2] = useState(0);
  const [dragExtS3, setDragExtS3] = useState(0);
  const [dragDayE, setDragDayE] = useState(0);
  const [dragDayB, setDragDayB] = useState(0);
  const [dragCredT, setDragCredT] = useState(0);
  const [switchDrag, setswitchDrag] = useState(0);
  const [dragEnd, setdragEnd] = useState(0);



  useEffect(() => {
    fetch('/api/dashboard').then(res => res.json()).then(data => {
      setdataLoaded(data.loaded)
      setknnPred0(data.knn_pred_0);
      setknnPred1(data.knn_pred_1);
    });

  }, []);


  const handleSubmit = e => {
  e.preventDefault();

  const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(idClient)
    };

  fetch("/api/dashboard/id", requestOptions)
    .then(response => response.json())
    .then(res => {
      setclientInfo(res.infoIdClient);
      setknnPred0(res.knn_pred_0);
      setknnPred1(res.knn_pred_1);
      // setDragExtS1(clientInfo.EXT_SOURCE_1);
      // setDragExtS2(clientInfo.EXT_SOURCE_2);
      // setDragExtS3(clientInfo.EXT_SOURCE_3);
      // setDragDayE(clientInfo.DAYS_EMPLOYED);
      // setDragDayB(clientInfo.DAYS_BIRTH);
      // setDragCredT(clientInfo.CREDIT_TERM);
    });

  }

  const handleChange = e => setIdClient(e.target.value)

  // const setDrag = (feature, value) => {
  //   feature == "EXT_SOURCE_1" && setDrag(value);
  //   feature == "EXT_SOURCE_2" && setDragExtS2(value);
  //   feature == "EXT_SOURCE_3" && setDragExtS3(value);
  //   feature == "DAYS_EMPLOYED" && setDragDayE(value);
  //   feature == "DAYS_BIRTH" && setDragDayB(value);
  //   feature == "CREDIT_TERM" && setDragCredT(value);
  // }

  // *********************************************
  // *********************************************
  // *********************************************
  // *********************************************
  // *********************************************
  // *********************************************
  // chart js

  // function option() {
    // 

   

  //   return chart1_2_options

  // }


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


  const option = (feature) => {
    
    const chart1_2_options = {
      dragData: false,
      dragX: false,

      onDragStart: function(e, element) {
      },
      onDrag: function(e, datasetIndex, index, value) {
        // update the point left and right of clicked point
        // if the first point is clicked, only update the point to the right
        if (index === 0) {
        // if the last point is clicked, only update the point before
            // all other cases
          setDrag(value.x);
          // feature == "EXT_SOURCE_1" && setDragExtS1(value.x);
          // feature == "EXT_SOURCE_2" &&  setDragExtS2(value.x);
          // feature == "EXT_SOURCE_3" &&  setDragExtS3(value.x);
          // feature == "DAYS_EMPLOYED" &&  setDragDayE(value.x);
          // feature == "DAYS_BIRTH" &&  setDragDayB(value.x);
          // feature == "CREDIT_TERM" &&  setDragCredT(value.x);
          // setDrag(value.x)
        } else {
          setDrag(value.x);
          // all other cases
          // feature == "EXT_SOURCE_1" && setDragExtS1(value.x);
          // feature == "EXT_SOURCE_2" &&  setDragExtS2(value.x);
          // feature == "EXT_SOURCE_3" &&  setDragExtS3(value.x);
          // feature == "DAYS_EMPLOYED" &&  setDragDayE(value.x);
          // feature == "DAYS_BIRTH" &&  setDragDayB(value.x);
          // feature == "CREDIT_TERM" &&  setDragCredT(value.x);
        }
      },
      onDragEnd: function(e, datasetIndex, index, value) {
        // setDrag(value.x);
        // setdragEnd(value.x);
        // feature == "EXT_SOURCE_1" && setDragExtS1(value.x);
        // feature == "EXT_SOURCE_2" &&  setDragExtS2(value.x);
        // feature == "EXT_SOURCE_3" &&  setDragExtS3(value.x);
        // feature == "DAYS_EMPLOYED" &&  setDragDayE(value.x);
        // feature == "DAYS_BIRTH" &&  setDragDayB(value.x);
        // feature == "CREDIT_TERM" &&  setDragCredT(value.x);

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




  const chart = (knnPred0Feature, knnPred1Feature, clientFeature, feature) => {

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
    // let chart1_2_options = option()
    return [chartExample1.data, option(feature)]
  }

  const chartDoughnut = (clientProba, thserold) => {
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
    return [doughnut.data, chartDoughnutOption]
  }

  // *********************************************
  // *********************************************
  // *********************************************
  // *********************************************
  // *********************************************
  // *********************************************

 
  // const ExtS1_Change = (feature) => {
  //   if (feature == "EXT_SOURCE_1" ) {
  //     if (drag) { return drag } 
  //     else { return 0} 
  //     }
  //   else {return 0}    
  // }


  const ExtS1_Change = () => {
    let valueReturn = 0

    if (clientInfo.EXT_SOURCE_1){
      valueReturn = clientInfo.EXT_SOURCE_1

      if (bigChartData == "EXT_SOURCE_1" &&  drag ) { valueReturn = drag}
      
      if (bigChartData == "EXT_SOURCE_1" &&  dragExtS1 ) { valueReturn = dragExtS1}

      if (bigChartData != "EXT_SOURCE_1" &&  dragExtS1 ) { valueReturn = dragExtS1}
      
    } else {
      valueReturn = 0
    }
    return valueReturn
  }



  const ExtS2_Change = (prev) => {
    let valueReturn = 0

    if (clientInfo.EXT_SOURCE_2){
      valueReturn = clientInfo.EXT_SOURCE_2

      if (bigChartData == "EXT_SOURCE_2" &&  drag ) { valueReturn = drag}

      if (bigChartData == "EXT_SOURCE_2" &&  dragExtS2 ) { valueReturn = dragExtS2}

      if (bigChartData != "EXT_SOURCE_2" &&  dragExtS2 ) { valueReturn = dragExtS2}
      
    } else {
      valueReturn = 0
    }
    return valueReturn
  }






  // const ExtS2_Change = () => {
  //   if (bigChartData == "EXT_SOURCE_2") {
  //     if (drag) { return drag } 
  //     else if (clientInfo.EXT_SOURCE_2) {
  //       return clientInfo.EXT_SOURCE_2
  //     } 
  //     else {return 0}
  //   }
  //   else if (clientInfo.EXT_SOURCE_2) {
  //     return clientInfo.EXT_SOURCE_2
  //   } 
  //   else {return 0}
  //   // return 0
  // }



  const ExtS3_Change = () => {
    if (dragExtS3) { return dragExtS3 } 
    else { 
      if (clientInfo.EXT_SOURCE_3) { return clientInfo.EXT_SOURCE_3} 
      else { return 0} 
    }
  }
  // const ExtS1_Change = () => {
  //   if (dragExtS1) { return dragExtS1 } 
  //   else { 
  //     if (clientInfo.EXT_SOURCE_1) { return clientInfo.EXT_SOURCE_1} 
  //     else { return 0} 
  //   }
  // }
  // const ExtS1_Change = () => {
  //   if (dragExtS1) { return dragExtS1 } 
  //   else { 
  //     if (clientInfo.EXT_SOURCE_1) { return clientInfo.EXT_SOURCE_1} 
  //     else { return 0} 
  //   }
  // }
  // const ExtS1_Change = () => {
  //   if (dragExtS1) { return dragExtS1 } 
  //   else { 
  //     if (clientInfo.EXT_SOURCE_1) { return clientInfo.EXT_SOURCE_1} 
  //     else { return 0} 
  //   }
  // }


// Hook

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]); 
  return ref.current;
}


const prevCount= usePrevious(bigChartData)
const prevDrag= usePrevious(drag)



const handleChangeSwitchExt1 = () => {

  // const prevCount = usePrevious(bigChartData)
  setBigChartData("EXT_SOURCE_1")
  
  // console.log("handleChangeSwitchExt1", bigChartData)
  // prevCount == "EXT_SOURCE_1" && setDragExtS1(drag);
  // prevCount == "EXT_SOURCE_2" && setDragExtS2(drag);
  // prevCount == "EXT_SOURCE_3" && setDragExtS3(drag);
  // prevCount == "DAYS_EMPLOYED" && setDragDayE(drag);
  // prevCount == "DAYS_BIRTH" && setDragDayB(drag);
  // prevCount == "CREDIT_TERM" && setDragCredT(drag);

  // setDrag(NaN)
}


const handleChangeSwitchExt2 = () => {
  console.log("handleChangeSwitchExt2", bigChartData)

  // prevCount == "EXT_SOURCE_1" && setDragExtS1(drag);
  // prevCount == "EXT_SOURCE_2" && setDragExtS2(drag);
  // prevCount == "EXT_SOURCE_3" && setDragExtS3(drag);
  // prevCount == "DAYS_EMPLOYED" && setDragDayE(drag);
  // prevCount == "DAYS_BIRTH" && setDragDayB(drag);
  // prevCount == "CREDIT_TERM" && setDragCredT(drag);
  // setDrag(NaN)
  setBigChartData("EXT_SOURCE_2")
}


  return (

    <div className="App">
      <header className="App-header">
      </header>
        <Row >
          <Col className="my-auto">
            <Card className="card-chart text-center align-center" >
              <CardBody >
                <h3 className="mr-sm-2" tag="h3" className="justify-content-md-center"> ID Client (&lt; {dataLoaded.size}) </h3>
                <Form inline onSubmit={handleSubmit} className="justify-content">
                        <Input className="mb-2 mr-sm-2 mb-sm-0" type="text" 
                          value={idClient} 
                          onChange={handleChange}
                        />
                      <Button type="submit" value="Submit">Submit</Button>
                </Form>
              </CardBody>  
            </Card>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">EXT_SOURCE_1</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" />{" "}
                  {parseFloat(ExtS1_Change()).toFixed(2)}
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>


          <Col className="my-auto" xl={8}  >
            <Card className="card-chart">
              <CardBody>
                <h3 >The current predict is {parseFloat(clientInfo.y_proba).toFixed(3)} : load {clientInfo.y_pred?"REFUSED":"GRANTED"}</h3> 
                <h4> 
                  thresold={parseFloat(dataLoaded.THR_OPTI).toFixed(2)}  
                </h4> 
                <div className="chart-area">
                  <Doughnut 
                    data={chartDoughnut(clientInfo.y_proba?clientInfo.y_proba:dataLoaded.THR_OPTI, dataLoaded.THR_OPTI)[0]}
                    options={chartDoughnut(clientInfo.y_proba?clientInfo.y_proba:dataLoaded.THR_OPTI, dataLoaded.THR_OPTI)[1]}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

        </Row>

        <Row>
          <Col className="my-auto">
            <Row>
              <Col >
                  <Card className="card-chart">
                    <CardHeader>
                      <h5 className="card-category">EXT_SOURCE_2</h5>
                      <CardTitle tag="h3">
                        <i className="tim-icons icon-bell-55 text-info" />{" "}
                        {parseFloat(ExtS2_Change(prevCount)).toFixed(2)}
                      </CardTitle>
                    </CardHeader>
                </Card>
              </Col>

              <Col >
                <Card className="card-chart">
                  <CardHeader>
                    <h5 className="card-category">EXT_SOURCE_3</h5>
                    <CardTitle tag="h3">
                      <i className="tim-icons icon-bell-55 text-info" />{" "}
                      {parseFloat(clientInfo.EXT_SOURCE_3?clientInfo.EXT_SOURCE_3:0).toFixed(2)}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Col>


              <Col >
                  <Card className="card-chart">
                    <CardHeader>
                      <h5 className="card-category">DAYS_EMPLOYED</h5>
                      <CardTitle tag="h3">
                        <i className="tim-icons icon-bell-55 text-info" />{" "}
                        {parseFloat(clientInfo.DAYS_EMPLOYED?clientInfo.DAYS_EMPLOYED:0).toFixed(2)}
                      </CardTitle>
                    </CardHeader>
                </Card>
              </Col>
              <Col >
                  <Card className="card-chart">
                    <CardHeader>
                      <h5 className="card-category">DAYS_BIRTH</h5>
                      <CardTitle tag="h3">
                        <i className="tim-icons icon-bell-55 text-info" />{" "}
                        {parseFloat(clientInfo.DAYS_BIRTH?clientInfo.DAYS_BIRTH:0).toFixed(2)}
                      </CardTitle>
                    </CardHeader>
                </Card>
              </Col>
              <Col >
                  <Card className="card-chart">
                    <CardHeader>
                      <h5 className="card-category">CREDIT_TERM</h5>
                      <CardTitle tag="h3">
                        <i className="tim-icons icon-bell-55 text-info" />{" "}
                        {parseFloat(clientInfo.CREDIT_TERM?clientInfo.CREDIT_TERM:0).toFixed(2)}
                      </CardTitle>
                    </CardHeader>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>



        <Row>
          <Col>
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category" > Feature density  </h5>
                    <CardTitle tag="h2">500-nearest clients </CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                            active: bigChartData === "EXT_SOURCE_1"
                          })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={ handleChangeSwitchExt1                        }

                      >
                        <input
                          defaultChecked
                          className="d-none"
                          name="options"
                          type="radio"
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          EXT_SOURCE_1
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                            active: bigChartData === "EXT_SOURCE_2"
                          })}
                        onClick={ handleChangeSwitchExt2 }
                      >
                        <input
                          className="d-none"
                          name="options"
                          type="radio"
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          EXT_SOURCE_2
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                            active: bigChartData === "EXT_SOURCE_3"
                          })}
                        onClick={() => setBigChartData("EXT_SOURCE_3")}
                      >
                        <input
                          className="d-none"
                          name="options"
                          type="radio"
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          EXT_SOURCE_3
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="3"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                            active: bigChartData === "DAYS_EMPLOYED"
                          })}
                        onClick={() => setBigChartData("DAYS_EMPLOYED")}
                      >
                        <input
                          className="d-none"
                          name="options"
                          type="radio"
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          DAYS_EMPLOYED
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="4"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                            active: bigChartData === "DAYS_BIRTH"
                          })}
                        onClick={() => setBigChartData("DAYS_BIRTH")}
                      >
                        <input
                          className="d-none"
                          name="options"
                          type="radio"
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          DAYS_BIRTH
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="5"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                            active: bigChartData === "CREDIT_TERM"
                          })}
                        onClick={() => setBigChartData("CREDIT_TERM")}
                      >
                        <input
                          className="d-none"
                          name="options"
                          type="radio"
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          CREDIT_TERM
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
                <div className="chart-area">
                  <Scatter
                      data={chart(knnPred0[bigChartData], knnPred1[bigChartData], clientInfo[bigChartData], bigChartData)[0]}
                      options={option(bigChartData)}
                    />;
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
    </div>





  );
}


export default App;