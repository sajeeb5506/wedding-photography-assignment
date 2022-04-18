import React from 'react';
import './About.css';
import img from '../../../src/img/sajeebbg.png';
const About = () => {
    return (
        <div>
            <div className="about-container">
               <div className="">
                   <img className='img' src={img} alt="" />
               </div>
               <div className="">
               <div className=""><h2 className='question'>About MySelf</h2></div>
                <div className="">
                <p className='answer'>   
                      Hi, I am Sajeeb from Banglades. I want to be a web developer. I started my web-development journey with Programming Hero.The journey of learning beginner level programming is coming to an end a few months. I want to start my career with a job as a developer. 
                </p>
                <button className='seemore'>See More...</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;