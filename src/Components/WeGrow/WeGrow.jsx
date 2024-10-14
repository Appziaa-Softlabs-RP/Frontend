import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';

export default function WeGrow() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        }}>
            <Card style={{ width: '300px', textAlign: 'center', padding: '20px', fontSize: '12px', fontWeight: '600' }}>
                <Card.Body>
                    <CheckCircleFill color="var(--PRIMARY_COLOR)" size={40} className="mb-3" />
                    <Card.Title style={{ color: 'var(--PRIMARY_COLOR)', fontSize: '24px', fontWeight: 'bold' }}>WE GROW TOGETHER</Card.Title>
                    <Card.Text style={{ color: 'var(--PRIMARY_COLOR)', marginBottom: '20px' }}>
                        <p>
                            OPT A FRANCHISE & BECOME AN OWNER
                        </p>
                    </Card.Text>
                    <Button variant="success" onClick={handleShow}
                        style={{
                            backgroundColor: 'var(--PRIMARY_COLOR)',
                            border: '0',
                            fontSize: '14px',
                            fontWeight: '600',
                        }}
                        className='btn w-75 p-2 rounded-5'
                    >
                        WRITE TO US
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="Enter your phone number" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}