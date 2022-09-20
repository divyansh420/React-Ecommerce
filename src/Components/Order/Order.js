import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {
    const handleOrder = () => {
        toast('Thanks for your Order');
    }
    return (


        <div id="order" className='container w-70  mt-5 ' >
            <h2 className='text-success text-center mt-2'>Place Your Order</h2>
            <Form >
                <Form.Group className="mb-5 pt-2 mt-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Phone " />
                </Form.Group>
                <Form.Group className="mb-2 mt-5 p-5" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="FirstName" />
                </Form.Group>
                <Form.Group className="mb-2 mt-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="LastName" />
                </Form.Group>
                <Form.Group className="mb-2 mt-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>
                <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="email" />
                </Form.Group>
                <Button onClick={handleOrder} variant="success w-50 mx-auto d-block my-4 mt-3" type="submit">
                    Buy Now
                </Button>
                <ToastContainer></ToastContainer>
            </Form>

        </div>

    );
};

export default Order;