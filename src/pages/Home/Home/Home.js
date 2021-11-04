import React from 'react';
import Banner from '../Banner/Banner';
import Offerings from '../Offerings/Offerings';
import SubscribeUs from '../SubscribeUs/SubscribeUs';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Offerings></Offerings>
            <WhyUs></WhyUs>
            <SubscribeUs></SubscribeUs>
        </div>
    );
};

export default Home;