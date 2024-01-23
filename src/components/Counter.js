// src/components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/CounterActions';

const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>Counter: {counter}</h2>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
