import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardHeader, CardFooter } from 'reactstrap'
import UpdateTask from '../Modals/UpdateTask'
import TodoItems from './TodoItems';

function Kard({ task, index, deleteTask, updateTaskList }) {

    const [modal, setModal] = useState(false);
    const [todoItem, settodoItem] = useState('');
    const [todoList, setTodoList] = useState([]);


    useEffect(() => {
        let obj = localStorage.getItem(`todoItem${index}`)
        if (obj) {
            let tempList = []
            tempList = JSON.parse(obj)
            setTodoList(tempList)
        }
    }, [])

    const toggle = () => setModal(!modal);

    const handleUpdate = (taskObj) => {
        updateTaskList(taskObj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
        localStorage.removeItem(`todoItem${index}`)
        window.location.reload()
    }

    const handleAddToDo = () => {
        if (todoItem) {
            let tempList = todoList
            tempList.push(todoItem)
            setTodoList(tempList)
            localStorage.setItem(`todoItem${index}`, JSON.stringify(todoList))
            settodoItem('')
        }

    }

    const deleteItem = (itemIndex) => {
        let tempList = todoList
        tempList.splice(itemIndex, 1)
        setTodoList(tempList)
        localStorage.setItem(`todoItem${index}`, JSON.stringify(todoList))
        window.location.reload()
    }


    return (
        <Card className='Kard'>

            <CardHeader className='KardHeader'>

                <CardTitle tag="h5">{task.title}</CardTitle>

                <CardSubtitle className="text-muted" tag="p">{task.description}</CardSubtitle>


                <button className='editTask' onClick={toggle}>EDIT</button>
                <UpdateTask modal={modal} toggle={toggle} task={task} updateTask={handleUpdate}></UpdateTask>

                <button className='deleteTask' onClick={handleDelete}>DEL</button>

            </CardHeader>

            <CardBody>

                <TodoItems todoList={todoList} deleteItem={deleteItem}></TodoItems>

            </CardBody>

            <CardFooter className="KardFooter">

                <input className="addToDo" value={todoItem} onChange={e => settodoItem(e.target.value)}></input>
                <button className='addToDo' onClick={handleAddToDo}>ADD</button>

            </CardFooter>

        </Card>

    )
}

export default Kard