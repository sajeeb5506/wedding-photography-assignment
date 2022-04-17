import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Sociallogin from '../SocialLogin/Sociallogin';
const Regester = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const emailRef = useRef('');
    const nameRef = useRef('');
    const passwordRef = useRef('');
     
    const handelSubmit =event=>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
    }
    const navigetRegester =event=>{

        navigate('/regester')
    }
    if(user){
        navigate('/');
    }

    return (
        <div className='container w-50 mx-auto' >
         
           <h1 className='text-center text-primary'>Please Register</h1>

           <Form onSubmit={handelSubmit}>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             
              <Form.Control ref={nameRef} type="name" placeholder="Enter Your Name" required />
              <Form.Text className="text-muted">

             </Form.Text>
             </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
              
              <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
            
             </Form.Text>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
              
              <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
             
          </Form.Group>
             <Button variant="primary" type="submit">
             Register
            </Button>
            </Form>
            <p>New to Register ? <Link to="/login" className='text-primary text-decoration-none ' onClick={navigetRegester} > Login</Link></p>
            <Sociallogin/>
        </div>
    );
};

export default Regester;