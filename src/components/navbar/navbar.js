import React from "react";

export default function(props) {
  return (
    <nav className="navbar sticky-top navbar-light bg-light justify-content-center">
      <ul className="nav">
        <li className="nav-item mr-5"><h2>Clicky Game</h2></li>
        <li className="nav-item mr-5 ml-5"><h2>{props.message}</h2></li>
        <li className="nav-item ml-5"><h2>Score: {props.scoreCount} | High Score: {props.highScore} </h2></li>
      </ul>
    </nav>
  )
}