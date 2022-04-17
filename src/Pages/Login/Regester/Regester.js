import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Regester = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const nameRef = useRef('');
    const passwordRef = useRef('');
     
    const handelSubmit =event=>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password,name);
    }
    const navigetRegester =event=>{

        navigate('/regester')
    }

    return (
        <div className='container w-50 mx-auto' >
         
           <h1 className='text-center text-primary'>Please Register</h1>

           <Form onSubmit={handelSubmit}>
           <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Your name</Form.Label>
              <Form.Control ref={nameRef} type="name" placeholder="Enter Your Name" required />
              <Form.Text className="text-muted">

             </Form.Text>
             </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
             We'll never share your email with anyone else.
             </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
             <Button variant="primary" type="submit">
             Login
            </Button>
            </Form>
            <p>New to Register ? <Link to="/login" className='text-primary text-decoration-none ' onClick={navigetRegester} > Login</Link></p>
        </div>
    );
};

export default Regester;