import React from "react";

export function ReadValues(props) {
    return(
        <div>
            <label>Database values: </label>
            <select>
                { props.valuesArray.map((value, index) => 
                    <option key={index} value={value}>{value.value}</option>)
                };
            </select>
            <button>Delete</button>
        </div>
    );
}