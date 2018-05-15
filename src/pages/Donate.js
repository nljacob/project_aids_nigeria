import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Donate = () => (
    <div>
        <Container style={{ marginTop: 30 }}>
            <Row>
                <Col size="md-12">
                    <h1>We need your help!</h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <p>
                        Project AIDS Nigeria is a Charitable Educational Organization ground in Christian Faith.  We believe that it is only through education and through sharing the truth of the Gospel of Christ that can we can make progress against the advancement og HIV.
                        <br /> <br />
                        But we cannot do it alone...
                    </p>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <h1>Please Donate</h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <p>
                        By 'clicking' on the DONATE button below, you can help us reach and train the workers needed to educate the thousands of Nigerians at risk by this horrible disease.  Will you stand with us?  God Bless You!
                    </p>
                    <a class="btn btn-success" href="https://www.paypal.com/donate/?token=Fq-Y-ODt7TUD6LAsDLAJS9ZZhOOVCq_-kfUVvKMxc-QOdgr8lNmFx7YReWLlx4z0zBUV60&country.x=US&locale.x=US" role="button">DONATE</a>
                </Col>
            </Row>
            <Row>
                <Col size="md-6"> <br />
                    <h1>How we use your donations</h1>
                    <br />
                    <p>
                        All donations are used in the Project Aids Nigeria Ministry. To the side there is a chart that represents where each dollar goes.
                    </p>
                </Col>
                <Col size="md-6">
                    <div className="align-middle">
                        <img src="http://www.projectaidsnigeria.org/uploads/4/2/3/0/42309013/3021499_orig.png" alt="Smiley face" height="450" width="700" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="md-12 offset-md-6">
                <h3>THANK YOU FOR YOUR GENEROUS, TAX DEDUCTIBLE GIFT.</h3>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Donate;