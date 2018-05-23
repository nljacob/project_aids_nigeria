// Scroll down to see Neeha and Celeste's work starting at ***

// James, Nitya, and Alicia's work starts here
import React, { Component } from 'react';
// import './App.css';
// import Video from '../../components/Video/Video';
// import ModalVideo from '../../components/Modal/ModalVideo';
import "./Curriculum.css";

class App extends Component {
  render() {
    return (
      <div className="curriculum-page">
      <div className="container">
        <div className="row">
          <div className="col text-center">
          <br/>
          <br/>
            <h3>WELCOME TO THE CURRICULUM PAGE!</h3>
            <br/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Here you will be able to explore and learn more about HIV/AIDS. Below are a variety of buttons each with a different topic. Once you click on a topic you will be taken to a page where a video will show up. The video will begin to play and pause at different random points. You will then be prompted with a question. Whether you answered correctly or incorrectly you will be notified. Afterwards you click on "CLOSE", keep watching the video until the next question shows up and so on until finished. At the bottom of the video there is a button to return to this page and choose another topic. </p>
            <br/>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
          <a id="button-space" className="btn btn-info" href="/video" role="button">HIV POSITIVE SYMPTOMS AND SIGNS</a>
          <a id="button-space"className="btn btn-info" href="/video2" role="button">THE SCIENCE OF HIV/AIDS</a>
          <a id="button-space" className="btn btn-info" href="" role="button">WHAT IS HIV?</a>
          <a id="button-space" className="btn btn-info" href="" role="button">HIV PREVENTION</a>
          <a id="button-space" className="btn btn-info" href="" role="button">SIGNS YOU MAY HAVE HIV</a>
          <a id="button-space" className="btn btn-info" href="" role="button">STAGES OF HIV</a>
          <a id="button-space" className="btn btn-info" href="" role="button">ARE AIDS AND HIV THE SAME?</a>
          <a id="button-space" className="btn btn-info" href="" role="button">MEDICINE FOR HIV</a>
          <a id="button-space" className="btn btn-info" href="" role="button">CURES FOR HIV</a>
          <a id="button-space" className="btn btn-info" href="" role="button">RESOURCES FOR AIDS</a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;