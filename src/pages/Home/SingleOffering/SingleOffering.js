import React from 'react';
import { Card, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './SingleOfferings.css'

const SingleOffering = (props) => {
    const { title, price, description, img, _id } = props.tour;
    const url = `/services/${_id}`
    const { isLoading } = useAuth();
    if (isLoading) {
        return <div className="spinner"><Spinner animation="grow" /></div>
    }

    return (
        <Col>
            <div className="service-card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className="body-text pe-4">
                        <h3>{title}</h3>
                        <h5>${price}</h5>
                        <p>{description.slice(0, 90)}....</p>
                        <Link to={url}><button className="btn-details">Book Now</button></Link>
                    </div>
                </Card.Body>
            </div>
        </Col>
    );
};

export default SingleOffering;


// onClick={serviceDetails}