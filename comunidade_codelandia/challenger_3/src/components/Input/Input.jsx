import React from "react";
import "./style.css";

function Input(props) {
    const {typeName, placeholder} = props;
    return (
        <input className="input-types" type={typeName} placeholder={placeholder} required/>
    )
}

export default Input;