import React, { useState } from 'react';
import './Sidebar.css';
import SectionTitle from './SectionTitle';
import TaskList from './TaskList';
// import InfoBoxList from './InfoBoxList';
function Sidebar(props) {
    const [inputValue, setInputValue] = useState(" ");

     const {QData} = props;
    //  const preparationPlan =QData?.[0].Object.keys(QData)[0];
    const preparationPlanKey = Object.keys(QData?.[0] ?? {})?.[0];
    const preparationPlan = QData[0]["7DaysPreparationPlan"];
    console.log("PreparationPlan")
    console.log(preparationPlan);
    

     const handleChange = (e) => {
      setInputValue(e.target.value)
     }

     const handleFocus = () =>{
      setInputValue('');
     }
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-profile"></div>
        <div>Good Morning, Sourabh</div>
        <div className="sidebar-settings">⚙️</div>
      </div>
      <div className='sidebar-Title'>
      <div className='sidebar-Title1'><SectionTitle title="Playlist" /></div>
      <div className='input-box'>
            <input 
            list = "dropdown-options" 
            type="text" 
            placeholder=' ' 
            className='boxx'
            value = {inputValue}
            onChange={handleChange}
            onFocus={handleFocus} 
            ></input>
            <datalist id="dropdown-options">
                <option value={preparationPlanKey} />
                <option value="option 2" />
                <option value="option 3" />
                <option value="option 4" />
            </datalist>
        </div>
      </div>
      <div className="tasklist-section">
     {preparationPlan.map((task)=>(
        <TaskList key={task.week}  Task={task}/>
      ))}
      {/* <TaskList />
      <TaskList />
      <TaskList />
      <TaskList /> */}
      </div>
      
      {/* <InfoBoxList /> */}
    </div>
  );
}

export default Sidebar;
