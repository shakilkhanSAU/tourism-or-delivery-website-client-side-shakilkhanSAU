import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div className="container why-us">
            <p>Why TourX</p>
            <h2>Why You Are Travel With TourX</h2>

            <Row className="g-3 mt-4">
                <Col className="column" sm>
                    <h4>100% Rrusted Agency</h4>
                    <span>Travel is more than the seeing of sights; it is a change that goes on, deep and permanent, in the ideas of living</span>
                </Col>
                <Col className="column" sm>
                    <h4>10+ Year of Travel</h4>
                    <span>Travel is more than the seeing of sights; it is a change that goes on, deep and permanent, in the ideas of living</span>
                </Col>
                <Col className="column" sm>
                    <h4>2000+ Our Guide</h4>
                    <span>Travel is more than the seeing of sights; it is a change that goes on, deep and permanent, in the ideas of living</span>
                </Col>
            </Row>
        </div>
    );
};

export default WhyUs;