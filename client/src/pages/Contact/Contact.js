import React from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import "./Contact.css";
import map from "../../images/map.png";

const Contact = () => (
    <div className="contact-page">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                        <br/>
                        <br/>
                        <h3>Contact Project AIDS Nigeria</h3>
                        <br/>
                        <br/>
                </div>
            </div>
            <div className="row">
            <div className="col-6">
                <img alt="" src= {map} id="map-image" />
            </div>
                
                <div className="col-6 text-center">
                    <h4>ADDRESS:</h4>
                    <h6>No: 22 Bank Road Bori​<br/>Ogoni, Rivers State, Nigeria</h6>
                    <h4>PHONE:</h4>
                    <h6>09075542187</h6>
                    <h4>EMAIL:</h4>
                    <h6>aidsnigeria@gmail.com<br/>panstudentsconnect@gmail.com </h6>
                </div>
                
                </div>
                <div className="row">
                <div className="col text-center">
                <h3 id="sendmessage">SEND US A MESSAGE</h3>
                <br/>
                </div>
                </div>
                <div className="row">
                <div className="col text-center">
                <p>We welcome your comments and your support. Please complete the form below and we will contact you as soon as possible.</p>
                <br/>
                </div>
                </div>
            <div className="row">
            <div className="col">
            </div>
            <div className="col text-center">
                    <form>
                        
                        <input id="name" type="text" placeholder="Name" required/>
                        <br/>
                        <br/>
                        
                        <input id="email" type="email" placeholder="Email" required/>
                        <br/>
                        <br/>

                        <textarea id="comment"name="message" placeholder="Comment"/>
                        <br/>
                        <br/>

                        <button type="button" className="btn btn-info">SUBMIT</button>
                        
                    </form>                    
                </div>
                <div className="col text-center">
            </div>
            </div>
        </div>
    </div>
);

export default Contact;