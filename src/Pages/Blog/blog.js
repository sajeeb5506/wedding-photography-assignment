import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='blogs'>
            <h2 className='question'>1.Difference between authorization and authentication.</h2>
            <p className='answer'> Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.</p>
            <h2 className='question'>2.Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p className='answer'>Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase. So I am using firebase. </p>
            <p className='answer'>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            <h2 className='question'>3. What other services does firebase provide other than authentication?</h2>
            <span className='answer'>There are many services which Firebase provides, Most useful of them are:</span> 
            <p className='answer'> 
            1.Cloud Firestore,
            2.Cloud Functions,
            3.Authentication,
            4.Hosting,
            5.Cloud Storage,
            6.Google Analytics,
            7.Predictions,
            8.Cloud Messaging etc.</p>
        </div>
    );
};

export default Blog;