import React, { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(1);
  console.log('updated!!');

  const handleClick = () => {
    // console.log('clicked');
    setCount(count + 1);
    console.log(count);
  };

  console.log(count);

  console.log('updated!!');
  return (
    <div>
      <span>숫자: {count}번</span>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default UseState;
