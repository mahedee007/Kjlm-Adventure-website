import React from 'react';
import { Row, Spinner } from "react-bootstrap";
import Destination from '../Destination/Destination';
import useTours from '../../../hooks/useTours';

const Destinations = () => {

    const [ destinations] =useTours();

    return (
        <div className="mt-4 mb-3">
            <h2 className="text-warning fw-bold">Our Destinations</h2>
            <hr className="bg-warning w-25 mx-auto"/>
            {
                destinations.length===0 ? <Spinner animation="border" variant="warning"/>
                :
                <Row xs={1} lg={3} md={2} className="g-2 container w-75 mx-auto">
                {
                    destinations.map(destination=><Destination key={destination._id} destination={destination}></Destination>)
                }
            </Row>
            }
        </div>
    );
};

export default Destinations;