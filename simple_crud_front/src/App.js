import React from 'react';
import './App.css';
import axios from "axios";

import { AddValue } from "./components/AddValue"
import { ReadValues } from "./components/ReadValues"
import { UpdateValue } from './components/UpdateValue';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    }

    this.addValue = this.addValue.bind(this);
  }

  addValue(value) {
    let objectValue = {
      value: value
    }
    this.state.values.push(objectValue);
    const tmp = this.state.values;
    this.setState({
      values: tmp
    });
    console.log(this.state.values);
  }

  componentWillMount() {
        console.log("loading the values in the list...");
        axios.get("http://localhost:8000/values").then(res => {
            // console.log(res.data);
            for(const key in res.data) {
              // console.log(res.data[key]);
                // values_res.push(res.data[key]);
                const tmp = {
                  value: res.data[key]
                }
                this.state.values.push(tmp);
            }
            const newValues = this.state.values;

            this.setState({
              values: newValues
            })
            console.log("values loaded in the list!");
            //this.appendOptions();
        });
    };

  render() {
    return (
      <div>
        <AddValue onAddedValue={this.addValue}/>
        <br />
        <ReadValues valuesArray={this.state.values}/>
        <UpdateValue />
      </div>
    );
  }
}

export default App;
