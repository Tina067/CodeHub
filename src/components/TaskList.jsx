import React from 'react';
import './TaskList.css';

function TaskList(props) {
  const { Task } = props;
  console.log(Task);
  
  return (
    <div className='main-Tasklist'>
      {/* Looping through each week */}
      <div className="weekName">Week {Task.week}</div>
      
      {/* Looping through each day */}
      {Task.days.map((dayItem) => (
        <div key={dayItem.day} className="day-section">
          <div className="days">Day {dayItem.day}</div>
          
          {/* Looping through each question of the day */}
          <div className="taskList">
            {dayItem.questions.map((questionItem, index) => (
              <div key={index} className="task-list-item">
                <div className="check-box">
                  <input type="checkbox" className="task-list-checkbox" />
                </div>
                <div className="question-section">
                  <span className='question'>{questionItem.question}</span>
                  <span className='question-topic'>{questionItem.topic}</span>
                </div>    
              </div>
            ))}
          </div>
        </div>
      ))}
    </div> 
  );
}

export default TaskList;
