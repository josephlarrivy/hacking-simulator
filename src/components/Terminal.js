import React from "react";

import '../styles/Terminal.css'


const Terminal = ({animate}) => {

  
  return (
    <div id="terminal-container">
      <button onClick={animate}>Click</button>
    </div>
  )
}

export default Terminal;