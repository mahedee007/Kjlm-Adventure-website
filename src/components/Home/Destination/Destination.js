import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Destination = (props) => {
    const {_id,img,Title,Description,Price} = props.destination;

    return (
        <div className="mt-3 mb-5">
            <Col className="m-3 gx-4 h-100">
                <div className="card border-0 shadow h-100" >
                    <img src={img} className="card-img-top img-fluid"  alt=""/>
                    <div className="card-body h-100">
                        <h1 className="card-title text-danger">{Title}</h1>
                        <p className="card-text text-start text-secondary">{Description}</p>
                        <p className="fw-bold text-danger">{Price}</p>
                    </div>
                    <div className="card-footer border-0 bg-white">
                        <NavLink
                        to={`/destinationbooking/${_id}`} type="button"
                        className="d-grid btn btn-warning rounded-3 text-white "
                        >Book Now</NavLink>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default Destination;