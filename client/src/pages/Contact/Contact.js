import React from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import "./Contact.css";
<<<<<<< HEAD
=======
import map from "../../images/map.png";
>>>>>>> dc45c8a68e2baeb9410ca4155fb3d8f8f51c12fb

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
<<<<<<< HEAD
                <div className="col-6">
                    <p>ADDRESS</p>
                    <p>No: 22 Bank Road Bori​<br/>Ogoni, Rivers State, Nigeria</p>
                    <p>PHONE</p>
                    <p>09075542187</p>
                    <p>EMAIL</p>
                    <p>aidsnigeria@gmail.com<br/>panstudentsconnect@gmail.com </p>
                </div>

                <div className="col-6">
                    <form>
                        <label for="name">Name:</label><br/>
=======
                <div className="col-6 text-center">
                    <h4>ADDRESS:</h4>
                    <h6>No: 22 Bank Road Bori​<br/>Ogoni, Rivers State, Nigeria</h6>
                    <h4>PHONE:</h4>
                    <h6>09075542187</h6>
                    <h4>EMAIL:</h4>
                    <h6>aidsnigeria@gmail.com<br/>panstudentsconnect@gmail.com </h6>
                </div>
                <div className="col-6">
                <img alt="" src= {map} id="map-image" />
                </div>
                </div>
                <div className="row">
                <div className="col text-center">
                <h3>SEND US A MESSAGE</h3>
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
            <div className="col">
                    <form>
                        <label htmlFor="name">Name:</label><br/>
>>>>>>> dc45c8a68e2baeb9410ca4155fb3d8f8f51c12fb
                        <input id="name" type="text" required/>
                        
                        <br/>
                        <br/>

<<<<<<< HEAD
                        <label for="email">Email:</label><br/>
=======
                        <label htmlFor="email">Email:</label><br/>
>>>>>>> dc45c8a68e2baeb9410ca4155fb3d8f8f51c12fb
                        <input id="email" type="email" required/>

                        <br/>
                        <br/>

<<<<<<< HEAD
                        <label for="comment">Comment: &nbsp;</label><br/>
=======
                        <label htmlFor="comment">Comment: &nbsp;</label><br/>
>>>>>>> dc45c8a68e2baeb9410ca4155fb3d8f8f51c12fb
                        <textarea id="comment"name="message" rows="10" cols="30"/>

                        <br/>
                        <br/>

<<<<<<< HEAD
                        <input type="submit"></input>
                        
                    </form>                    


                </div>
            </div>
            <div className="row">
                
=======
                        <button type="button" className="btn btn-info">Submit</button>
                        
                    </form>                    
                </div>
                <div className="col">
            </div>
>>>>>>> dc45c8a68e2baeb9410ca4155fb3d8f8f51c12fb
            </div>
        </div>
    </div>
);

export default Contact;