import React from 'react'
import User  from './User';
import Title1Comp from './Title1Comp';
import {RecBox1, RecBoxTick} from './RecBox';
import './SidebarComp.css'

const SidebarComp = () => {
  return (
    <div className='side'>
    <div className='user'><User /></div>
    <div className='title1comp'><Title1Comp/></div>
    <div className='checkboxRec'>
    <RecBoxTick/>
     <RecBoxTick/>
     <RecBoxTick/>
     
     </div>
     <div className='Rec'>
     <RecBox1/>
     <RecBox1/>
     <RecBox1/>
     </div>
    </div>
  )
}

export default SidebarComp