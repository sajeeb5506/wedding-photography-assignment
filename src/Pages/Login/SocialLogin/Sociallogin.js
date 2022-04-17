import React from 'react';
import './Sociallogin.css';
import logo from '../../../img/Google__G__Logo.svg.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
const Sociallogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const naviget = useNavigate();
if(loading){
    return <Loading/>
}

   let element;
    if (error) {
        element =
          <div>
            <p>Error: {error.message}</p>
          </div>
        
      }

      if (user){
      naviget('/');
      }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div  style={{height:"2px"}} className="bg-primary w-50"></div>
                <p className='mt-2 px-3 text-bold'>or</p>
                <div style={{height:"2px"}} className="bg-primary w-50"></div>
            </div>
            <button 
               onClick={() => signInWithGoogle()}
            className='btn btn-info w-50 d-block mx-auto'>
                <img style={{height:'20px'}} src={logo} alt="" />
                <span className='px-2'>Google Sign In</span></button>
                <div className="  mt-3 text-danger  ">
                {element}
                </div>
        </div>
    );
};

export default Sociallogin;