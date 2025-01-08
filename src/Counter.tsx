import React, { useState } from 'react';

type count=number; 
let initialcount:count=0;

const Counter = () => {
  const [count, setCount] = useState<count>(initialcount);

  const increment = ():void =>{
    setCount((prevState)=>prevState + 1);
  };

  const decrement = ():void => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
