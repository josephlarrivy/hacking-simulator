import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Cube from './components/Cube';
import Terminal from './components/Terminal';

function App() {

  const [level, setLevel] = useState(1)
  const [animationPhase, setAnimationPhase] = useState(0)

  const [frontAnimation, setFrontAnimation] = useState('front-no-animation')
  const [backAnimation, setBackAnimation] = useState('back-no-animation')
  const [leftAnimation, setLeftAnimation] = useState('left-no-animation')
  const [rightAnimation, setRightAnimation] = useState('right-no-animation')
  const [topAnimation, setTopAnimation] = useState('top-no-animation')
  const [bottomAnimation, setBottomAnimation] = useState('bottom-no-animation')

  const animate = () => {
    setAnimationPhase(animationPhase+1)
    if (animationPhase === 0) {
      setFrontAnimation('front-pop-spin-big')
    } else if (animationPhase === 1) {
      setBackAnimation('back-pop-spin')
    } else if (animationPhase === 2) {
      setLeftAnimation('left-pop-spin')
    } else if (animationPhase === 3) {
      setRightAnimation('right-pop-spin')
    } else if (animationPhase === 4) {
      setTopAnimation('top-pop-spin')
    } else if (animationPhase === 5) {
      setBottomAnimation('bottom-pop-spin')
    } else if (animationPhase === 6) {
      setFrontAnimation('front-pop-spin')
    } else if (animationPhase === 7) {
      setBackAnimation('back-pop-spin-big')
    } else if (animationPhase === 8) {
      setLeftAnimation('left-pop-spin-big')
    } else if (animationPhase === 9) {
      setRightAnimation('right-pop-spin-big')
    } else if (animationPhase === 10) {
      setFrontAnimation('front-no-animation')
      setBackAnimation('back-no-animation')
      setLeftAnimation('left-no-animation')
      setRightAnimation('right-no-animation')
      setTopAnimation('top-no-animation')
      setBottomAnimation('bottom-no-animation')
      setLevel(level+1)
      setAnimationPhase(0)
    }
  }


  return (
    <div className="App">
      <div id='terminal-component-container'>
        <Terminal
          level={level}
          setLevel={setLevel}
          animate={animate}
        />
      </div>
      <div id='cube-componenet-container'>
        <Cube 
          level={level}
          frontAnimation={frontAnimation}
          backAnimation={backAnimation}
          leftAnimation={leftAnimation}
          rightAnimation={rightAnimation}
          topAnimation={topAnimation}
          bottomAnimation={bottomAnimation}
        />
      </div>
    </div>
  );
}

export default App;