import React, { useEffect, useState } from 'react'
import CreateTask from '../Modals/CreateTask'
import TaskContainer from './TaskContainer';


function ToDoApp() {

    const [modal, setModal] = useState(false);
    const [List, setList] = useState([]);
    
    useEffect(() => {
        let obj = localStorage.getItem("TaskList")
        if (obj) {
            let tempList = JSON.parse(obj)
            setList(tempList)
        }
    }, [])


    const toggle = () => setModal(!modal);

    const appendList = (obj) => {
        let tempList = List
        tempList.push(obj)
        setList(tempList)
        localStorage.setItem("TaskList", JSON.stringify(List))
    }

    const editTaskList = (taskObj, index) => {
        let tempList = List
        tempList[index] = taskObj
        setList(tempList)
        localStorage.setItem("TaskList", JSON.stringify(tempList))
        window.location.reload()
    }

    const deleteTask = (index) => {
        let tempList = List
        tempList.splice(index, 1)
        setList(tempList)
        localStorage.setItem("TaskList", JSON.stringify(tempList))
    }

    return (
        <div>
            <header className="App-header">
                <h1>TODO APP</h1>
                <button className='create-task-btn' onClick={toggle}>CREATE TASK</button>

                <CreateTask modal={modal} toggle={toggle} appendList={appendList}></CreateTask>
            </header>
            <div>
                <TaskContainer taskList={List} deleteTask={deleteTask} updateTaskList={editTaskList}></TaskContainer>
            </div>
        </div>
    )
}

export default ToDoApp