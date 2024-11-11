import React from 'react';
import './Sidebar.css';
import SectionTitle from './SectionTitle';
import TaskList from './TaskList';
// import InfoBoxList from './InfoBoxList';
function Sidebar() {
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
            <input list = "dropdown-options" type="text" placeholder=' ' className='boxx'></input>
            <datalist id="dropdown-options">
                <option value="option 1" />
                <option value="option 2" />
                <option value="option 3" />
                <option value="option 4" />
            </datalist>
        </div>
      </div>
      <div className="tasklist-section">
      <TaskList />
      {/* <TaskList />
      <TaskList />
      <TaskList /> */}
      </div>
      
      {/* <InfoBoxList /> */}
    </div>
  );
}

export default Sidebar;
