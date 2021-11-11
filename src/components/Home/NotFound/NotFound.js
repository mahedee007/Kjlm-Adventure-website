import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div className="mt-5 mb-5 vh-90">
            <img src={img} alt="notfound" className="img-fluid  " />
            <NavLink to="/home" className="mt-4 btn btn-warning text-light fs-5 fw-bold ">GO Back</NavLink>
        </div>
    );
};

export default NotFound;