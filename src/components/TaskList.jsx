import React from 'react';
import './TaskList.css';

function TaskList() {
  return (
    <div className='main-Tasklist'>
    <div className="days">Day 36</div>
    <div className='taskList'>
      {[1,2 ,3].map((task) => (
        <div key={task} className="task-list-item">
        <div className="check-box"><input type="checkbox" className="task-list-checkbox" /></div>
        <div className="question-section">
        {/* <span className='question'>Task {task}</span> */}
        <span className='question'>Find the middle element of a sorted array</span>
        <span className='question-topic'>Binary search</span>
        <span className='question-topic'>Sorting</span>
        </div>    
        </div>
      ))}
    </div>
    </div>
  );
}

export default TaskList;
