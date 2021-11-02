import React from 'react';
import { Row } from 'react-bootstrap';
import useProduct from '../../../hooks/useProduct';
import SingleOffering from '../SingleOffering/SingleOffering';

const Offerings = () => {
    const { tours } = useProduct();

    return (
        <div className="container services px-4 mt-4" id="services">
            <h2>Travel World</h2>
            <hr />
            <div className="pt-3">
                <Row xs={1} md={3} className="g-5">
                    {
                        tours.map(tour => <SingleOffering
                            key={tour._id}
                            tour={tour}
                        ></SingleOffering>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Offerings;