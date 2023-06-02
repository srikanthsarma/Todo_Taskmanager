import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function UpdateTask({ modal, toggle, task, updateTask }) {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState(task.description)

    useEffect(() => {
        settitle(task.title)
        setdescription(task.description)
    }, [])

    const handleUpdate = () => {
        const taskObj = {}
        taskObj["title"] = title
        taskObj["description"] = description
        updateTask(taskObj)
        toggle()
        settitle("")
        setdescription("")
    }

    return (
        <div className='createTask'>
            <Modal isOpen={modal} toggle={toggle}>

                <ModalHeader toggle={toggle}>UPDATE TASK</ModalHeader>

                <ModalBody>
                    <form className='create-task-form'>
                        <div className='form-group'>
                            <label>TITLE</label>
                            <input
                                name='title'
                                value={title}
                                onChange={e => settitle(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>DESCRIPTION</label>
                            <input
                                name='description'
                                value={description}
                                onChange={e => setdescription(e.target.value)}
                            />
                        </div>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <button id="create-button" onClick={handleUpdate}>Update</button>
                    <button id="cancel-button" onClick={toggle}>Cancel</button>
                </ModalFooter>

            </Modal>

        </div>
    )
}

export default UpdateTask