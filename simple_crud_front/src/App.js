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
            selecte : [ ]
        }

        this.addValues = this.addValues.bind(this);
    }
    componentWillMount() {
        console.log("loading the values in the list...");
        axios.get("http://localhost:8000/values").then(res => {
            const values_res = [];
            for(const key in res.data) {
                console.log(res.data);
let test = {
    option : res.data[key],
    name : res.data[key],

}
                this.state.selecte.push(test);
            }
        

            console.log("values loaded in the list!");
            // this.appendOptions();
        });
    };

    addValues(arg) {
        let object = {
            option: arg,
            name: arg
        }

        this.state.selecte.push(object);
        let tmp = this.state.selecte;
        this.setState({
            selecte: tmp
        })

        console.log("ajouter")
        console.log(this.state.selecte)
    }
    
    render() {
        return (
            <div>
              <AddValue addedValue={this.addValues} />
              <br />
              <ReadValues selectedArray={this.state.selecte} />
              <UpdateValue />
            </div>
          );
    }
  
}

export default App;
