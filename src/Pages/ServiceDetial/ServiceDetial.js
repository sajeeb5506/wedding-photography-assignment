import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetial.css';
const ServiceDetial = () => {
    const {serviceId}=useParams();
    return (
        <div>
            <h1>Detial:{serviceId}</h1>
            <div className="text-center">
                <Link to="/cheakout"><button className='btninfo'>Checkout Booking</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetial;