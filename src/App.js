import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
// import './App.css';

// nodejs library that concatenates classes
import classNames from "classnames";
// // react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

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

function App() {

  const [sizeClient, setSizeClient] = useState(0);
  const [currentPredict, setCurrentPredict] = useState(0);
  const [idClient, setIdClient] = useState(0);


  useEffect(() => {
    fetch('/dashboard').then(res => res.json()).then(data => {
      setSizeClient(data.loaded)
      console.log("data loaded", sizeClient);
    });
  }, []);


  const handleSubmit = e => {
  e.preventDefault();

  const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(idClient)
    };

  fetch("/dashboard/id", requestOptions)
    .then(response => response.json())
    .then(res => setCurrentPredict(res.pred_id));
  }

  const handleChange = e => setIdClient(e.target.value)

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div> 
        <Form inline onSubmit={handleSubmit}>
          <Label className="mr-sm-2"> ID Client (&lt; {sizeClient}) </Label>
{/*attention fonctionnement du "Input" : à remplacer par "input" si pb*/}
            <Input className="mb-2 mr-sm-2 mb-sm-0" type="text" 
              value={idClient} 
              onChange={handleChange}
            />

{/*          <input type="submit" value="Submit" />*/}
          <Button type="submit" value="Submit">Submit</Button>
        </Form>
        <h3 className="mr-sm-2">The current predict is {currentPredict}.</h3>
      </div>

    </div>
  );
}


export default App;