
import React from "react";
import {useSelector} from 'react-redux';
import {increment} from './actions';
import { decrement } from "./actions";
import {useDispatch} from 'react-redux';

function App() {
  const counter = useSelector(state =>state.counter);
  const isLogged = useSelector(state=>state.isLogged);
  const dispatch = useDispatch();
  return (
    
    <div className="App">
      <h1>Hello</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {isLogged?<p>INformation is sensitive !</p>: ''}
    </div>
  );
}

export default App;
