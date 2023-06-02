import React from 'react'
import Kard from './Kard'

function TaskContainer({ taskList, deleteTask, updateTaskList }) {

  if (!taskList) return <p>NO Task</p>

  return (
    <div className='taskContainer'>
      {
        taskList.map((task, index) =>
          <Kard
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            updateTaskList={updateTaskList}
          ></Kard>)
      }
    </div>
  )
}

export default TaskContainer