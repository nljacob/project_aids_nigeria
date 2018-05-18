import React from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import "./Donate.css";

const Donate = () => (
    <div className="donate-page">
        <div className="container">
            <div className="row">
                <div className="col">
                <br />
                    <h1>We need your help!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>
                        Project AIDS Nigeria is a Charitable Educational Organization ground in Christian Faith.  We believe that it is only through education and through sharing the truth of the Gospel of Christ that can we can make progress against the advancement og HIV.
                        <br /> <br />
                        But we cannot do it alone...
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1>Please Donate</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>
                        By 'clicking' on the DONATE button below, you can help us reach and train the workers needed to educate the thousands of Nigerians at risk by this horrible disease.  Will you stand with us?  God Bless You!
                    </p>
                    <a className="btn btn-success" href="https://www.paypal.com/donate/?token=QSnBX3U_Q0zOaidkOOeGPPbVg5js15CYTEkIH-NRhzyWGWCpowudzV1RnrOhq4sbmbngAG&country.x=US&locale.x=US" target="_blank" rel="noopener noreferrer">DONATE</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <br />
                    <h1>How we use your donations</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
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