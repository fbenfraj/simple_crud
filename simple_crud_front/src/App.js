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
      values: [],
      selectedValue: ""
    }

    this.addValue = this.addValue.bind(this);
    this.changeSV = this.changeSV.bind(this);
    this.deleteValue = this.deleteValue.bind(this);
    this.check = this.check.bind(this);
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
            });
            if(newValues.length !== 0) {
              const firstValue = newValues[0].value;
              this.setState({
                selectedValue: firstValue
              });
            }
            console.log("values loaded in the list!");
            //this.appendOptions();
        });
  };

  changeSV(e){
    this.setState({
      selectedValue: e.target.value
    });
  };

  deleteValue() {
    console.log("Call to delete value");
    let valuesArray = this.state.values;
    const index = valuesArray.map(function(e) {
      return e.value;
    }).indexOf(this.state.selectedValue);
    valuesArray.splice(index, 1);
    console.log(valuesArray);
    this.setState({
      values: valuesArray,
    });
    if(valuesArray.length !== 0) {
      this.setState({
        selectedValue: valuesArray[0].value
      })
    }
    console.log(this.state.selectedValue);

    axios.delete("http://localhost:8000/values", {
      data: {
        value: this.state.selectedValue
      }
    }).then(res => {
      console.log("Value deleted in database too!");
    })
  }

  check() {
    console.log("TIME FOR A CHECK!");
    console.log("Selected value: ");
    console.log(this.state.selectedValue);
    console.log("Values in the select element: ");
    console.log(this.state.values);
  }

  render() {
    return (
      <div>
        <AddValue onAddedValue={this.addValue}/>
        <br />
        <ReadValues
        valuesArray={this.state.values}
        onSelectChange={this.changeSV}
        onDeletion={this.deleteValue}/>
        <UpdateValue />
        <button onClick={this.check}>Check button</button>
      </div>
    );
  }
}

export default App;
