import React from 'react'
import './MainComp.css';
import Div3 from './Div3';
const MainComp = () => {
  return (
    <div className='MainContainer'>
        <div className=" divv div1">
          <div className='div1-div1'></div>
          <div className='div1-div2'></div>
        </div>
        <div className="divv div2">
            <div className="div2-div1"></div>
            <div className="div2-div2"></div>
        </div>
        <div className="divv div3"><Div3/></div>
    </div>
  )
}

export default MainComp