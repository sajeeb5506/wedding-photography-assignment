import React from 'react';
import "./Service.css"
const Service = ({service}) => {
    const{id,name,picture,price,description}=service;
    return (
        <div>
         <div className="cart">
         <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>Price: ${price}</h3>
            <button >Book One For you</button>
         </div>
        </div>
    );
};

export default Service;
