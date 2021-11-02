import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero">
            <Row className="container">
                <Col sm={7}>
                    <h1>To Travel Is To Evolve</h1>
                    <p>We have made the most advanced, constumizable & user friendly medical theme in the world.</p>
                    <button className="btn-banner">Explore World</button>
                </Col>
                <Col sm={5}></Col>
            </Row>
        </div>
    );
};

export default Banner;