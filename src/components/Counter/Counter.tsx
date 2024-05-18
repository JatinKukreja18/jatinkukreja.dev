import React, { useState, type PropsWithChildren, type ReactChild } from 'react';
import './Counter.css';

const initialCount = 0;
type CounterProps =React.PropsWithChildren<{
    children?: React.ReactNode
    count: number
}>

export default function Counter({ children, count: initialCount }:CounterProps) {
  const [count, setCount] = useState(initialCount);
  const add = () => setCount((i) => {
    console.log(i);
    
    return i + 1});
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="counter-message">{children}!</div>
    </>
  );
}
