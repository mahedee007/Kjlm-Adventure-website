import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className="mb-0 bg-white w-100 container">
            <div className="bg-light text-dark ms-4 me-4">
                <Row className="pt-4 " lg={4} xs={1}>
                    <Col className=" mb-2">
                        <h2 className="fw-bold"><img alt="logo" src={logo} width="50"/>KJML Adventures</h2>
                        <p>House #23 , Road-12</p>
                        <p>Banani,Dhaka-1213</p>
                        <p>Bangladesh</p>
                    </Col>
                    <Col className=" mb-2">
                        <h2 className="fw-bold">Discover</h2>
                        <p><i className="fas fa-redo"></i> Refund Policy</p>
                        <p><i className="fas fa-gem"></i> EMI Policy</p>
                        <p><i className="fas fa-medkit me-2"></i> Privacy Policy</p>
                        <p><i className="fas fa-hand-holding-usd me-2"></i> Need Help ?</p>
                    </Col>
                    <Col className=" mb-2">
                        <h2 className="fw-bold">Contact</h2>
                        <p ><i className="fas fa-phone-alt"></i> +8809611123123</p>
                        <p ><i className="far fa-envelope"></i> info@kjmladventures.com</p>
                        
                    </Col>
                    <Col className=" mb-2">
                        <h2 className="fw-bold">Payment Methods</h2>
                        <p ><i className="fab fa-cc-apple-pay"></i> Apple Pay</p>
                        <p ><i className="fab fa-cc-mastercard"></i> Master Card</p>
                        <p ><i className="fab fa-paypal"></i> PayPal</p>
                        <p ><i className="fab fa-cc-discover"></i> Discover</p>
                        
                    </Col>
                </Row>
            </div>
            <hr className=" w-75 mx-auto"/>
            <Container>
                <Row className="mt-1">
                    <Col className="pb-1"><small >Copyright <i className="far fa-copyright text-success"></i> 2021 by KJML Adventures</small></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;