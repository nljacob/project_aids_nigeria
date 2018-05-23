import React from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import "./Donate.css";
import donatechart from "../../images/donatechart.png";

const Donate = () => (
    <div className="donate-page">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3>We need your help!</h3>
                    <br />
                </div>
            </div>  
                  
            <div className="row">
                <div className="col-md-6 text-center">
                    <br/>
                    <p>
                        Project AIDS Nigeria is a Charitable Educational Organization ground in Christian Faith.  We believe that it is only through education and through sharing the truth of the Gospel of Christ that can we can make progress against the advancement og HIV.
                        <br/>
                        But we cannot do it alone...
                    </p>
                    <br/>
                    <p>By 'clicking' on the DONATE button below, you can help us reach and train the workers needed to educate the thousands of Nigerians at risk by this horrible disease.  Will you stand with us?  God Bless You!</p>
                    
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                        <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="hosted_button_id" value="S9EE85PUGBZZE"/>
                        {/* <input alt="" id="donatebutton" type="image" src= {donatebutton}/> */}
                        <button type="submit" className="btn">DONATE</button>
                        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                    </form>
                    <br/>
                    <p>Thank you for your generous, tax deductible gift!</p>
                </div>

                <div className="col-md-6 text-center">
                    <img alt="" src= {donatechart} id="image-donatechart"/>
                    <h5 id="centered">How your giving helps us</h5>
                </div>
            </div>
        </div>
    </div>
);

export default Donate;