import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className="about">
            <div className="first">
                <Row className="about-section">
                    <Col xs={12} md={6}>
                        <h2 className="fw-blod">Know About Tour<span className="text-danger">X</span></h2>
                        <p>Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure and other purposes for not more than one year . . .</p>
                        <Link to="/home"><button className="btn-details">Explore More</button></Link>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src="https://i.ibb.co/xHqdf8K/about1.jpg" className="img-fluid" alt="" />
                    </Col>
                </Row>
            </div>
        </div >
    );
};

export default AboutUs;