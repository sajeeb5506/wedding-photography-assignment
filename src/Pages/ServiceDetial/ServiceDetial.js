import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetial.css';
const ServiceDetial = () => {
    const {serviceId}=useParams();
    return (
        <div>
            <div className="serviceId">
            <h1>You select package no:{serviceId}</h1>
            </div>
            <div className="text-center">
                <Link to="/cheakout"><button className='btninfo'>Checkout Booking</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetial;