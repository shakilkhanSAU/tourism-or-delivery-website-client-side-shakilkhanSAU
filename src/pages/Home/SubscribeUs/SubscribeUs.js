import React from 'react';
import './SubscribeUs.css'

const SubscribeUs = () => {
    return (
        <div className="subscribe">
            <h2>Subscribe Tour<span className="text-danger">X</span></h2>
            <div className="subscribe-us">
                <input type="email" placeholder="Enter Your Email" />
                <button>Subscribe Us</button>
            </div>
        </div>
    );
};

export default SubscribeUs;