import React from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import "./Donate.css";
import donatebutton from "../../images/donatebutton.png";

const Donate = () => (
    <div className="donate-page">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                <br/>
                <br/>
                <br/>
                <br/>
                    <h3>We need your help!</h3>
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>
                        Project AIDS Nigeria is a Charitable Educational Organization ground in Christian Faith.  We believe that it is only through education and through sharing the truth of the Gospel of Christ that can we can make progress against the advancement og HIV.
                        <br/>
                        But we cannot do it alone...
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4>Please Donate</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>
                        By 'clicking' on the DONATE button below, you can help us reach and train the workers needed to educate the thousands of Nigerians at risk by this horrible disease.  Will you stand with us?  God Bless You!
                    </p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                        <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="hosted_button_id" value="S9EE85PUGBZZE"/>
                        <input alt="" id="donatebutton" type="image" src= {donatebutton}/>
                        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <br />
                    <h4>How we use your donations</h4>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <p>
                        All donations are used in the Project Aids Nigeria Ministry. To the side there is a chart that represents where each dollar goes.
                    </p>
                </div>
            </div>
            <div className="row">
            <div className="col text-center">
                <img src="http://www.projectaidsnigeria.org/uploads/4/2/3/0/42309013/3021499_orig.png" alt="Smiley face" height="450" width="700" />
            </div>
           </div>
        </div>
    </div>
);

export default Donate;