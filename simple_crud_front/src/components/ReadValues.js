import React from "react";

export function ReadValues(props) {
        return(
            <div>
                <label>Database values: </label>
                <select onChange={props.onSelectChange}>
                    { props.valuesArray.map((value, index) => 
                        <option key={index} value={props.selectedValue}>{value.value}</option>)
                    };
                </select>
                <button onClick={props.onDeletion}>Delete</button>
            </div>
        );
}