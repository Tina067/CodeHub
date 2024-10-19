import React from 'react'
import './Title1Comp.css';

const Title1Comp = () => {
  return (
    <div className='tit1'>
        <div className='title1'>Title1</div>
        <div className='input-box'>
            <input list = "dropdown-options" type="text" placeholder=''></input>
            <datalist id="dropdown-options">
                <option value="option 1" />
                <option value="option 2" />
                <option value="option 3" />
                <option value="option 4" />
            </datalist>
        </div>
    </div>
  )
}

export default Title1Comp