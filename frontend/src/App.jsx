import { useEffect, useState, useRef} from "react";
import { increment,decrement } from "./store";
import {useSelector, useDispatch} from 'react-redux';

export default function App(){

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  

  useEffect(()=>{
    console.log('mounted once');

  },[]);

  useEffect(()=>{

    const id = setInterval(()=>{
      console.log('tick');
    },1000);

    return (()=>{
      clearInterval(id);
    })

  },[]);

  useEffect(()=>{
    
    console.log('count changed');

  },[count]);
  
  return <>
    <h2>{count}</h2>
    <button onClick={()=>dispatch(decrement())}>
      dec
    </button>

    <button onClick={()=>dispatch(increment())}>
      inc
    </button>
 
  </>

}
