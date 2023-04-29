import React from "react";

import '../styles/Cube.css'


const Cube = ({ frontAnimation, backAnimation, leftAnimation, rightAnimation, topAnimation, bottomAnimation }) => {


  return (
    <div id="cube-container">
      <div className="box">
        <div className="card" id={frontAnimation}>front</div>
        <div className="card" id={backAnimation}>back</div>
        <div className="card" id={leftAnimation}>left</div>
        <div className="card" id={rightAnimation}>right</div>
        <div className="card" id={topAnimation}>top</div>
        <div className="card" id={bottomAnimation}>bottom</div>
      </div>
    </div>
  )
}

export default Cube;