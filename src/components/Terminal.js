import React from "react";

import '../styles/Terminal.css'


const Terminal = ({ level, setLevel, animate }) => {

  
  return (
    <div id="terminal-container">
      <button onClick={animate}>CLICK</button>
    </div>
  )
}

export default Terminal;