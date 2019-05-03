import React from "react";
import axios from "axios"

export class ReadValues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valuesMap: {}
        }

        this.appendOptions = this.appendOptions.bind(this);
    }

    handleClick(e) {
        console.log("handleClick for delete called!");
    }

    appendOptions() {
        for(let i = 0; i < this.state.valuesArray.length; i++) {
            const option = document.createElement("option");
            option.value = this.state.valuesArray[i];
            option.innerHTML = this.state.valuesArray[i];
            document.getElementById("readValues").append(option);
            }
    }

    componentWillMount() {
        console.log("loading the values in the list...");
        axios.get("http://localhost:8000/values").then(res => {
            const values_res = [];
            for(const key in res.data) {
                values_res.push(res.data[key]);
            }
            this.setState({
                valuesArray: values_res
            });
            console.log("values loaded in the list!");
            this.appendOptions();
        });
    };

    render() {
        return(
            <div>
                <label>Database values: </label>
                <select id="readValues"></select>
                <button onClick={this.handleClick}>Delete</button>
            </div>
        );
    }
}