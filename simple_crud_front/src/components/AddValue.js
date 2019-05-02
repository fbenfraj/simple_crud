import React from "react";
import axios from "axios";

export class AddValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleClick(e) {
        //alert(this.state.value);
        console.log('handleClick call!');
        axios.post("http://localhost:8000/values", {
            value: this.state.value
        }).then(res => {
            console.log("New value sent!");
        })
    }

    render() {
        return(
            <div>
                <label>Add value: </label>
                <input value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>OK</button>
            </div>
        );
    }
}