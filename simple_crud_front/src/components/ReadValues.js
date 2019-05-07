import React from "react";

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

    render() {
        return(
            <div>
                <label>Database values: </label>
                <select>
                    { this.props.valuesArray.map((value, index) => 
                        <option key={index} value={value}>{value.value}</option>)
                    };
                </select>
                <button onClick={this.handleClick}>Delete</button>
            </div>
        );
    }
}