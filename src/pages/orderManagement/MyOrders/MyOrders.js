import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css'


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const email = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(orders)
            })
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are You Sure! Want to delete? ')
        if (proceed) {
            const url = `http://localhost:5000/deleteProduct/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Deleted Successfully!")
                        const remainingOrders = orders.filter(user => user._id !== id)
                        setOrders(remainingOrders)
                    }
                })
        }
    }
    const handleUpdateStatus = () => {

    }
    return (
        <div className="container">
            <h2 className="fw-bold">My Orders</h2>
            <Row xs={1} md={3} className="g-5">
                {
                    orders.map(order =>
                        <Col>
                            <div className="service-card">
                                <Card.Img variant="top" src={order.img} />
                                <Card.Body>
                                    <div className="body-text pe-4">
                                        <h3 className="fw-bold">{order.title}</h3>
                                        <h4 className="fw-bold">${order.price}</h4>
                                        <p>{order.status}</p>
                                        <p>{order.description.slice(0, 90)}....</p>
                                        <button className="mb-2 me-2 btn-details" onClick={() => handleDelete(order._id)}>Delete</button>
                                        <button onClick={handleUpdateStatus} className="btn-details">Update Status</button>
                                    </div>
                                </Card.Body>
                            </div>
                        </Col>



                    )
                }
            </Row>
        </div>
    );
};

export default MyOrders;