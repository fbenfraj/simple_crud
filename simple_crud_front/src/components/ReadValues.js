import React from "react";
import axios from "axios"

export class ReadValues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valuesArray: {},
            selecte : [ ]
        }

        this.appendOptions = this.appendOptions.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(e) {
        console.log("handleClick for delete called!");
        // let tmp = this.state.valuesArray.push("ajouté");
        // this.setState({
        //     valuesArray: tmp
        // });
        var newArray = this.state.selecte.slice();  
        let newObj = {
            options: "une_option", 
            name: "un_nom"
        };  
        newArray.push(newObj);   
        this.setState({selecte:newArray})
        console.log("ici: " + this.state.valuesArray);
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
                console.log(res.data);
let test = {
    option : res.data[key],
    name : res.data[key],

}
              //  this.state.selecte.push(test);
            }
            this.setState({
                valuesArray: values_res
            });

            console.log("values loaded in the list!");
            // this.appendOptions();
        });
    };

    render() {
        console.log("bug")
        console.log(this.state.valuesArray)
        return(
            <div>
                <label>Database values: </label>
                {/* <select id="readValues"></select> */}
                <select name="field">
                    {this.props.selectedArray.map((fbb, index) =>
                        <option key={index} value="fbb.value">{fbb.name}</option>
                    )};
                </select>
                <button onClick={this.handleClick}>Delete</button>
            </div>
        );
    }
}