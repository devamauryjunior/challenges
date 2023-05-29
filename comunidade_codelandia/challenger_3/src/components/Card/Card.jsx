import React from "react";
import './style.css';

function Card(props) {
    const {backgroundColor, color} = props;
    const myStyleCard = {
        backgroundColor,
        color,
    };
    return (
        <div className="card">
            <div style={myStyleCard} className="card-color">.</div>
            <h2 className="card-title">Título do card</h2>
            <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
            </p>
        </div>
    )
}


export default Card;