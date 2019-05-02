import React from "react";

export class ReadValues extends React.Component {
    render() {
        return(
            <div>
                <label>Database values: </label>
                <select>
                    <option>value1</option>
                    <option>value2</option>
                    <option>value3</option>
                </select>
                <button>Delete</button>
            </div>
        );
    }
}