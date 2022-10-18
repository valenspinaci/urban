import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div>
                <h2 className='mt-4 text-decoration-underline'>Contacto:</h2>
                <div className='mb-5'>
                    <p><span className='fw-bold text-decoration-underline'>Mail:</span> urbanclothes@gmail.com</p>
                    <p><span className='fw-bold text-decoration-underline'>Telefono:</span> + 54 9 12 345678</p>
                    <p><span className='fw-bold text-decoration-underline'>Whatsapp:</span> + 54 9 12 345678</p>
                </div>
                <hr className='w-25 mx-auto'></hr>
                <Form className='w-50 mx-auto mt-5'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className='fw-bold'>Nombre(*)</Form.Label>
                        <Form.Control type="text" required placeholder="Ingresá tu nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSurname">
                        <Form.Label className='fw-bold'>Apellido(*)</Form.Label>
                        <Form.Control type="text" required placeholder="Ingresá tu apellido" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDocument">
                        <Form.Label className='fw-bold'>DNI(*)</Form.Label>
                        <Form.Control className='buttonsNumber' type="number" required placeholder="Ingresá tu documento" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Email(*)</Form.Label>
                        <Form.Control type="email" required placeholder="Ingresá tu email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCell">
                        <Form.Label className='fw-bold'>Teléfono</Form.Label>
                        <Form.Control className='buttonsNumber' type="number" placeholder="Ingresá tu telefono" />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Contact