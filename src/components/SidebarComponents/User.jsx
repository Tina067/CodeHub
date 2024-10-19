import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import './User.css';
const User = () => {
  return (
    <div className='idclass'>
        <div className="sec1"><FaUserCircle size = {30}/></div>
        <div className="sec2">Good Morning, Sourabh</div>
        <div className="sec3"><IoSettingsOutline size = {30}/></div>

    </div>
  )
}

export default User;