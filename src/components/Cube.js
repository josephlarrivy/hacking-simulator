import React from "react";

import '../styles/Cube.css'


const Cube = ({ level, frontAnimation, backAnimation, leftAnimation, rightAnimation, topAnimation, bottomAnimation }) => {


  return (
    <div id="cube-container">
      <div className="box">
        <div className="card" id={frontAnimation}>Level {level}</div>
        <div className="card" id={backAnimation}>Level {level}</div>
        <div className="card" id={leftAnimation}>Level {level}</div>
        <div className="card" id={rightAnimation}>Level {level}</div>
        <div className="card" id={topAnimation}>Level {level}</div>
        <div className="card" id={bottomAnimation}>Level {level}</div>
      </div>
    </div>
  )
}

export default Cube;