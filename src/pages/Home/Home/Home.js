import React from 'react';
import Banner from '../Banner/Banner';
import Offerings from '../Offerings/Offerings';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div className="mb-4">
            <Banner></Banner>
            <Offerings></Offerings>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;