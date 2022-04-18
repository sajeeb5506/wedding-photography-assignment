import React from 'react';
import './Previouswork.css';
import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
import img4 from '../../img/4.jpg'
import img5 from '../../img/5.jpg'
import img6 from '../../img/6.jpg'
import img7 from '../../img/7.jpg'
import img8 from '../../img/8.jpg'

const Previouswork = () => {
    return (
       <>
       <h2 className='text-center text-primary mb-3'>Previous Work</h2>
           <div className="galary">

               <img className='galaryimg'  src={img1} alt="" />
           
               <img className='galaryimg' src={img2} alt="" />
           
               <img className='galaryimg'src={img3} alt="" />
             
               <img className='galaryimg'src={img4} alt="" />
               <img className='galaryimg'src={img5} alt="" />
               <img className='galaryimg'src={img6} alt="" />
               <img className='galaryimg'src={img7} alt="" />
               <img className='galaryimg'src={img8} alt="" />
              
              
             
           </div>
           </>
    );
};

export default Previouswork;