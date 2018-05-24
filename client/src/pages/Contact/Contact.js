import React from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import "./Contact.css";
import map from "../../images/map.png";
import ContactApp from '../../components/Contact/Contact'

const Contact = () => (
    <div className="contact-page">
        <div className="container">
        <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6 text-center">
                    <br />
                    <br />
                    <br />
                    <h3>Contact Project AIDS Nigeria</h3>
                    <br />
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            <div className="row">
            <div className="col-md-12 text-center">
                <img alt="" src= {map} id="map-image"/>
                <div id="contactinfo">
                    <h5>ADDRESS:</h5>
                    <h6>No: 22 Bank Road Bori​<br/>Ogoni, Rivers State, Nigeria</h6>
                    <h5>PHONE:</h5>
                    <h6>09075542187</h6>
                    <h5>EMAIL:</h5>
                    <h6>aidsnigeria@gmail.com<br/>panstudentsconnect@gmail.com </h6>
                </div>
            </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6 text-center">
                    <br />
                    <h3>SEND US A MESSAGE!</h3>
                    <br />
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
                <div className="row">
                <div className="col text-center">
                <p>We welcome your comments and your support. Please complete the form below and we will contact you as soon as possible.</p>
                </div>
                </div>
            <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4 text-center">
                <ContactApp />
                </div>
                <div className="col-md-4">
            </div>
            </div>
        </div>
    </div>
);

export default Contact;