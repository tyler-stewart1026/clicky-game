import React from "react";
import "./cardStyle.css"

const Cards = (props) => {
    return (
      <div className="click-item">
        <button onClick={() => props.scoreIncrement(props.id)}>
        <img src={props.image} alt={props.name} className="img-thumbnail"></img>
        </button>
      </div>
    );
  }

export default Cards;