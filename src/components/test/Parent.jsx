import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [inputValue, setInputValue] = useState('');

  const setKeyPress = key => {
    console.log(key);
  };

  return (
    <div>
      <h1>{inputValue}</h1>
      <Child inputValueHandler={setInputValue} keyPressHandler={setKeyPress} />
    </div>
  );
};

export default Parent;
