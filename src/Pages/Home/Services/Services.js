import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services,setService]= useState([]);


    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setService(data));
    },[]);
    return (
        <div className='cart-container'>
            
             {
                 services.map(service=> <Service
                 key={service.id}
                 service={service}
                 >

                 </Service>)
             }

        </div>
    );
};

export default Services;