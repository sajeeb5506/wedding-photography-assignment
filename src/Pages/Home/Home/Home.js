import React from 'react';
import Services from '../Services/Services';
import Banner from '../Banner/Banner'
import Previouswork from '../../PreviousWork/Previouswork';
const Home = () => {
    return (
        <>
            
            <Banner></Banner>
             <Services/>
             <Previouswork/>
        </>
    );
};

export default Home;