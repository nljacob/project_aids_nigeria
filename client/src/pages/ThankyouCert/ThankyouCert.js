import React, { Component } from 'react';
// import "./Curriculum.css";

class ThankyouApp extends Component {
  render() {
    return (
      <div className="curriculum-page">
      <div className="container">
        <div className="row">
          <div className="col text-center">
          <br/>
          <br/>
            <h3>Thank you for your submission!</h3>
            <br/>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p>You will receive an email from us within two weeks to discuss next steps.  We look forward to working with you to bring PAN to your school!   </p>
            <br/>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
          <a className="btn btn-info" href="/" role="button">HOME</a>&nbsp;
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ThankyouApp;