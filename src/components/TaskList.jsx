import React from 'react';
import './TaskList.css';

function TaskList() {
  return (
    <div className='taskList'>
      {[1, 2, 3].map((task) => (
        <div key={task} className="task-list-item">
          <input type="checkbox" className="task-list-checkbox" />
          <span>Task {task}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
