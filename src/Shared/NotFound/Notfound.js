import React from 'react';
import './Notfound.css';
import notfound from '../../img/404-error-page-templates.avif';
const Notfound = () => {
    return (
        <div>
            <h1 className='text-info text-center'>Page not Found</h1>
            <div className="">
            <img  className='errorimg'   src={notfound} alt="" />
            </div>
        </div>
    );
};

export default Notfound;