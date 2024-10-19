import React from 'react'
import User  from './User';
import Title1Comp from './Title1Comp';
import RecBox from './RecBox';
import './SidebarComp.css'

const SidebarComp = () => {
  return (
    <div className='side'>
    <div className='user'></div><User />
    <div className='title1comp'><Title1Comp/></div>
    <div className='checkboxRec'>
     <RecBox/>
     <RecBox/>
     <RecBox/>
     </div>
     <div className='Rec'>
     <RecBox/>
     <RecBox/>
     <RecBox/>
     </div>
    </div>
  )
}

export default SidebarComp