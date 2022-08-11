import React from 'react';

const Child = props => {
  return (
    <div>
      <input
        onChange={e => props.inputValueHandler(e.target.value)}
        onKeyPress={e => props.keyPressHandler(e.key)}
      />
    </div>
  );
};

export default Child;
