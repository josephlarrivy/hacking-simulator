import React, { useEffect, useState } from "react";

import '../styles/Terminal.css'


const Terminal = ({ level, setLevel, animate }) => {

  const [problems, setProblems] = useState(['1+1'])
  const [answers, setAnswers] = useState([])
  const [rightOrWrong, setRightOrWrong] = useState([])
  const [inputValue, setInputValue] = useState('');

  const evaluateMathExpression = (expr) => {
    const [operand1, operator, operand2] = expr.split(/([+\-\*])/);
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      return num1 / num2;
    } else {
      return operand1
    }
  }

  useEffect(() => {
    if (problems.length !== answers.length) {
      return
    } else if (evaluateMathExpression(problems[problems.length - 1]) == answers[answers.length - 1]) {
      const responses = ['correct - but you\'ll never hack in!', 'correct - are you some kind on computer wiz?', 'correct - but i eat hackers like you for breakfast?', 'correct answer']
      const randResp = Math.floor(Math.random() * responses.length)
      setRightOrWrong([...rightOrWrong, responses[randResp]])
      setProblems([...problems, generateNextProblem()])
      animate()
    } else {
      const responses = ['that is incorrect', 'wrong - you will never hack in at this rate', 'wrong - better clean up your act', 'wrong', 'wrong - I couldn\'t think as slow as you if I tried']
      const randResp = Math.floor(Math.random()*responses.length)
      setRightOrWrong([...rightOrWrong, responses[randResp]])
      setProblems([...problems, generateNextProblem()])
    }
  }, [answers])

  const generateNextProblem = () => {
    const generateInt = () => {
      let num = Math.floor(Math.random()*9) +1;
      return num
    }
    if (level <= 1) {
      let numberOne = generateInt()
      let numberTwo = generateInt()
      return (`${numberOne} + ${numberTwo}`)
    } else if (level > 1) {
      let numberOne = generateInt()
      let numberTwo = generateInt()
      let numberThree = generateInt()
      let numberFour = generateInt()
      return (`${numberOne+numberThree} + ${numberTwo+numberFour}`)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswers([...answers, inputValue])
    console.log(inputValue);
    setInputValue('');
  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div id="terminal-container">
      <div id="terminal-readout">
        {problems && answers && (() => {
          const result = [];
          let i = 0;
          let j = 0;
          let k = 0;
          while (i < problems.length && j < answers.length && k < rightOrWrong.length) {
            result.push(<p className="computer" >COMPUTER: what is {problems[i++]} ?</p>);
            result.push(<p className="hacker">HACKER: {answers[j++]}</p>);
            result.push(<p className="computer">COMPUTER: {rightOrWrong[k++]}</p>)
            result.push(<p> </p>);
          }
          while (i < problems.length) {
            result.push(<p className="computer">COMPUTER: what is {problems[i++]} ?</p>);
          }
          while (j < answers.length) {
            result.push(<p className="hacker">HACKER: {answers[j++]}</p>);
          }
          while (k < rightOrWrong.length) {
            result.push(<p className="computer">COMPUTER: {rightOrWrong[k++]}</p>);
            result.push(<p className="computer"></p>);
          }
          return result;
        })()}
      </div>
      <div id="user-input">
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} placeholder='type solution - press enter to submit' />
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* <button onClick={animate}>CLICK</button> */}
    </div>
  );

}

export default Terminal;
