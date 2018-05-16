import React from "react";
import SplashPage from "../../components/SplashPage";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

const Home = () => (
  <div>
    <SplashPage backgroundImage="https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a027094c15a1ae14bf72f8f71d9380b&auto=format&fit=crop&w=1500&q=80">
      <h1>Project AIDS Nigeria</h1>
      <h2>For Love and Knowledge</h2>
    </SplashPage>
    <div className="container">
      <div className="row">
        <div className="col">
        <br />
          <h1>Our Mission</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <br />
          <p>
            Project AIDS Nigeria is organized exclusively for the charitable and educational purpose of helping rural communities in Nigeria combat the HIV/AIDS epidemic. We achieve this goal by providing education for the prevention of HIV/AIDS through a Christian perspective and by working closely with local hospitals to better serve their HIV/AIDS patients.
          <br />
            <br />
            Project AIDS Nigeria (PAN) delivers educational workshops about HIV and other sexually transmitted diseases to prevent new infections and to reduce the stigma associated with HIV.  Project AIDS Nigeria also works closely with local hospitals to help them better serve their HIV/AIDS patients through providing volunteers for certain tasks or aiding with non-medicinal material needs.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <br />
          <img src="https://images.unsplash.com/photo-1509239767605-0703ef611f08?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91bccdaf7e77e35a450ec61c27201c18&auto=format&fit=crop&w=1500&q=80" alt="Smiley face" height="300" width="450" />
        </div>
        <div className="col-6">
          <br />
          <p>Lorem ipsum dolor amet actually pop-up flannel kickstarter literally meh. Hot chicken microdosing edison bulb neutra venmo. Chambray asymmetrical kickstarter selfies raw denim XOXO plaid taxidermy biodiesel. Skateboard flannel cred, migas artisan wolf butcher. Glossier pug subway tile lumbersexual godard. Air plant mumblecore try-hard helvetica. Irony art party vape selvage YOLO seitan williamsburg. Lorem ipsum dolor amet actually pop-up flannel kickstarter literally meh. Hot chicken microdosing edison bulb neutra venmo. Chambray asymmetrical kickstarter selfies raw denim XOXO plaid taxidermy biodiesel. Skateboard flannel cred, migas artisan wolf butcher. Glossier pug subway tile lumbersexual godard. Air plant mumblecore try-hard helvetica. Irony art party vape selvage YOLO seitan williamsburg.</p>
        </div>
      </div>
    </div>
  </div>
)

export default Home;
