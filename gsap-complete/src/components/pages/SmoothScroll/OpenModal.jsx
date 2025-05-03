import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const OpenModal = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button onClick={() => setShow(true)} className='mx-auto d-flex'>
                Open Modal
            </button>
            <Modal
                centered
                show={show}
                onHide={() => setShow(false)}
                className="black_modal"
            >
                <Modal.Title>
                    My Modal
                </Modal.Title>
            </Modal>
        </div>
    )
}

export default OpenModal
