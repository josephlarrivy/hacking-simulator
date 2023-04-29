import React from "react";

import '../styles/Cube.css'


const Cube = ({animate}) => {


  return (
    <div id="cube-container">
      <div className="box">
        <div className="card" id="front">front</div>
        <div className="card" id="back">back</div>
        <div className="card" id="left">left</div>
        <div className="card" id="right">right</div>
        <div className="card" id="top">top</div>
        <div className="card" id="bottom">bottom</div>
      </div>
    </div>
  )
}

export default Cube;