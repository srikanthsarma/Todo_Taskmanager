import React from 'react'

function TodoItems({ todoList, deleteItem }) {

    return (
        <div className='todoItemsList'>
            {
                todoList.map((todo, index) =>
                    <div className='todoItems' key={index}>
                        <div className='todoItem'>{todo}</div>
                        <button onClick={() => deleteItem(index)}>DEL</button>
                    </div>)
            }
        </div>
    )
}

export default TodoItems