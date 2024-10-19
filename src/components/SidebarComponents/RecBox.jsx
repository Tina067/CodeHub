import React from 'react';
import './RecBox.css';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const RecBox1 = () => {
  return (
    <div className='box'></div>
  )
}

 const RecBoxTick = () =>{
    return (
        <div className="boxTick"><IoCheckmarkDoneCircleOutline size={40}/></div>
    )
}

export {RecBox1 ,  RecBoxTick}
