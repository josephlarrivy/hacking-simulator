import logo from './logo.svg';
import './App.css';
import Cube from './components/Cube';
import Terminal from './components/Terminal';

function App() {

  const animate = () => {

  }


  return (
    <div className="App">
      <div id='terminal-component-container'>
        <Terminal animate={animate}/>
      </div>
      <div id='cube-componenet-container'>
        <Cube animate={animate}/>
      </div>
    </div>
  );
}

export default App;
