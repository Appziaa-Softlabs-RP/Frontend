import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { StarFill, CheckCircleFill } from 'react-bootstrap-icons';
import ContactUs from '../ContactUs/ContactUs';

export default function WeGrow({ variant = 'subcomponent' }) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const isComponentVariant = variant === 'component';

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%', width: '90%', maxWidth: '800px', margin: isComponentVariant ? '40px auto' : '0' }}>
            <Card className={`text-${isComponentVariant ? 'left' : 'center'}`} style={{ width: isComponentVariant ? '100%' : '90%', background: isComponentVariant ? 'var(--PRIMARY_COLOR)' : 'white' }}>
                <Card.Body className={isComponentVariant ? 'd-flex flex-column gap-2 flex-md-row justify-content-between align-items-center' : 'd-flex flex-column gap-2 align-items-center'}>
                    {/* 1st Column: Icon */}
                    <div className="d-flex align-items-center justify-content-center">
                        {isComponentVariant ? (
                            <StarFill color="white" size={30} className="" />
                        ) : (
                            <CheckCircleFill color="var(--PRIMARY_COLOR)" size={25} />
                        )}
                    </div>

                    {/* 2nd Column: Text */}
                    <div className={`flex-grow-1 ${isComponentVariant ? 'text-center text-md-start' : ''} ms-3`}>
                        <Card.Title className="m-0" style={{ color: isComponentVariant ? 'white' : 'var(--PRIMARY_COLOR)', fontSize: '30px', fontWeight: 'bold' }}>
                            WE GROW {isComponentVariant ? '' : <br />} TOGETHER
                        </Card.Title>
                        <Card.Text style={{ color: isComponentVariant ? 'white' : 'var(--PRIMARY_COLOR)' }}>
                            OPT A FRANCHISE & BECOME AN OWNER
                        </Card.Text>
                    </div>

                    {/* 3rd Column: Button */}
                    <Button variant="success" onClick={handleShow} className="btn w-75 p-2 rounded-5" style={{ backgroundColor: isComponentVariant ? 'white' : 'var(--PRIMARY_COLOR)', border: '0', color: isComponentVariant ? 'var(--PRIMARY_COLOR)' : 'white', maxWidth: '200px' }}>
                        WRITE TO US
                    </Button>
                </Card.Body>
            </Card>

            {/* Modal */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContactUs />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}