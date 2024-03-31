import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByvalue, reset } from './counterSlice';


const Counter = () => {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch();

    const [data, setData] = useState(0);

    const handleIncrement = ()=>{
        dispatch(increment());
    }
    const handleReset = ()=>{
        dispatch(reset())
    }
    const handleDecrement = ()=>{
        dispatch(decrement())
    }
    const handleAdd = ()=>{
        dispatch(incrementByvalue(parseInt(data)))
    }

  return (
    <>
    <h2>Counter : {count}</h2>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleDecrement}>Decrement</button><hr />
    <input type="number" onChange={(e)=>setData(e.target.value)} value={data} />
    <button onClick={handleAdd}>Add</button>
    </>
  )
}

export default Counter;