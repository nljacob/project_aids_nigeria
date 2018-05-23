// Scroll down to see Neeha and Celeste's work starting at ***

// James, Nitya, and Alicia's work starts here
import React, { Component } from 'react';
// import './App.css';
import Video from '../../components/Video/Video';
// import ModalVideo from '../../components/Modal/ModalVideo';
import "./Video1.css";

class App extends Component {
  render() {
    return (
      <div className="curriculum-page">
        <div className="row">
          <div className="col text-center">
          <br/>
            <h3>HIV POSITIVE SYMPTOMS AND SIGNS</h3>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div id="main">
              <Video />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
          <a class="btn btn-info" href="/curriculum" role="button">Previous page</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;