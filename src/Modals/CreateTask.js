import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function CreateTask({ modal, toggle, appendList }) {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')

    const saveTask = () => {
        if (title && description) {
            let obj = {
                title: title,
                description: description
            }
            appendList(obj)
            toggle()
            settitle("")
            setdescription("")
        }
    }

    return (
        <div className='createTask'>
            <Modal isOpen={modal} toggle={toggle}>

                <ModalHeader toggle={toggle}>CREATE TASK</ModalHeader>

                <ModalBody>
                    <form className='create-task-form'>
                        <div className='form-group'>
                            <label>TITLE
                            <input
                                name='title'
                                value={title}
                                onChange={e => settitle(e.target.value)}
                            />
                            </label>
                        </div>
                        <div className='form-group'>
                            <label>DESCRIPTION
                            <input
                                name='description'
                                value={description}
                                onChange={e => setdescription(e.target.value)}
                            />
                            </label>
                        </div>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <button id="create-button" onClick={saveTask}>Create</button>
                    <button id="cancel-button" onClick={toggle}>Cancel</button>
                </ModalFooter>

            </Modal>

        </div>
    )
}

export default CreateTask