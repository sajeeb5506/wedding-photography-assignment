import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"
const Service = ({service}) => {
    const{id,name,picture,price,description}=service;
    const navigate = useNavigate();
    const  navigateServicedetial = id =>{
        navigate(`/serviceall/${id}`)
    }
    return (
        <div>
         <div className="cart">
         <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>Price: ${price}</h3>
            <button className='button' onClick={()=>{navigateServicedetial(id)}}>Book One For you</button>
         </div>
        </div>
    );
};

export default Service;
