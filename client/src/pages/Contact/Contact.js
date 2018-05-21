import React from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import "./Contact.css";

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
                    <h5>ADDRESS:</h5>
                    <p>No: 22 Bank Road Bori​<br/>Ogoni, Rivers State, Nigeria</p>
                    <h5>PHONE:</h5>
                    <p>09075542187</p>
                    <h5>EMAIL:</h5>
                    <p>aidsnigeria@gmail.com<br/>panstudentsconnect@gmail.com </p>
                </div>

                <div className="col-6">
                    <form>
                        <label for="name">Name:</label><br/>
                        <input id="name" type="text" required/>
                        
                        <br/>
                        <br/>

                        <label for="email">Email:</label><br/>
                        <input id="email" type="email" required/>

                        <br/>
                        <br/>

                        <label for="comment">Comment: &nbsp;</label><br/>
                        <textarea id="comment"name="message" rows="10" cols="30"/>

                        <br/>
                        <br/>

                        <input type="submit"></input>
                        
                    </form>                    


                </div>
            </div>
            <div className="row">
                
            </div>
        </div>
    </div>
);

export default Contact;