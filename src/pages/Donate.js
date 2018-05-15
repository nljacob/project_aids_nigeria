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
                        <br />
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
                    <button type="button" class="btn btn-success">DONATE</button>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <br />
                    <h1>How we use your donations</h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <p>
                        All donations are used in the Project Aids Nigeria Ministry. Below, please find a chart that represents where each dollar goes.
                    </p>
                </Col>
            </Row>
            <Row>
           <img src="http://www.projectaidsnigeria.org/uploads/4/2/3/0/42309013/3021499_orig.png" alt="Smiley face" height="450" width="700" />
            </Row>
        </Container>
    </div>
);

export default Donate;