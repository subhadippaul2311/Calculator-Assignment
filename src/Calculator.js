import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = num1 - num2;
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = num1 * num2;
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = num1 / num2;
    setResult(quotient);
  };

  const handleDelete = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <div>
      <h1 className="heading">Calculator</h1>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <br />

      <button onClick={handleAddition}>Addition</button>
      <button onClick={handleSubtraction}>Subtraction</button>
      <button onClick={handleMultiplication}>Multiplication</button>
      <button onClick={handleDivision}>Division</button>

      <br />
      <h1>Result: {result}</h1>
      <button onClick={handleDelete} className="dlt-button">
        Delete
      </button>
    </div>
  );
};

export default Calculator;
