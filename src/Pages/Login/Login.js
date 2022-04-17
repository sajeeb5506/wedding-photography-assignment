import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
     const location = useLocation();
     let from =location.state?.from?.pathname || '/';
    const handelSubmit =event=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigetRegester =event=>{

        navigate('/regester')
    }
    if(user){
        navigate(from,{replace:true});
    }
    return (
        <div className='container w-50 mx-auto' >
         
           <h1 className='text-center text-primary'>Please Login</h1>

           <Form onSubmit={handelSubmit}>
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
            <p>New to Register ? <Link to="/regester" className='text-primary text-decoration-none ' onClick={navigetRegester} > Sign up</Link></p>
        </div>
    );
};

export default Login;