import React, { useState } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import calculate from './calculator-functions/calculation';

const App = () => {

  const [result, setResult] = useState('');
  const onClick = button => {
    if (button === "=") {
      pressEqual()
    }
    else if (button === "C") {
      reset()
    }
    else if (button === "CE") {
      backspace()
    }
    else {
      setResult(result + button);
    }
  };

  const pressEqual = () => {
    var checkResult = ''
    checkResult = result;
    const caluclatedValue = calculate(checkResult);

    try {
      setResult(caluclatedValue);
    } catch (e) {
      setResult("error")
    }
  };

  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className='calculator-body'>

      <div className="calculator">

        <ResultComponent result={result} />
        <KeyPadComponent onClick={onClick} />
      </div>
    </div>
  );
}
export default App;