import React, { Component } from 'react';
import YouTube from 'react-youtube';
import ModalVideo from '../Modal/ModalVideo';
import questions from '../../questions.json';

let youTubeTimer;

class Video extends Component {

  state = {
    ct: 0,
    openModal: false,
    Questions: questions,
    questionCount: -1
  };

  round = (number, precision) => {
    let shift = (number, precision) => {
      let numArray = ("" + number).split("e");
      return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
    };
    return shift(Math.round(shift(number, +precision)), -precision);
  }

  _onPlay = (event) => {
    // access to player in all event handlers via event.target
    const stoppingPoints = [5.1, 10.1, 15.1, 18.1];
    this.setState({
      openModal: false
    });
    youTubeTimer = setInterval(() => {
      // console.log(this.round(event.target.getCurrentTime(), 1));
      if (this.round(event.target.getCurrentTime(), 1) === stoppingPoints[this.state.ct]){
        this.setState({
          ct: this.state.ct + 1,
          openModal: true,
          questionCount: this.state.questionCount + 1       
        });
        event.target.pauseVideo();
      }
    }, 100); 
    // console.log("Question Count: " + this.state.questionCount);
  }

  _onPause = (event) => {
    clearInterval(youTubeTimer);
  }

  _onEnd = (event) => {
    this.setState({
      ct: 0,
      openModal: false,
      questionCount: -1
    });
    clearInterval(youTubeTimer);
  }

  

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <div>
        <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
          onReady={this._onReady}
          onPlay={this._onPlay}
          onPause={this._onPause}
          onEnd={this._onEnd}
        />
        {/* {console.log("Checking question count again: " + this.state.questionCount)} */}
        {
          // this.state.Questions.map(quest => (
            (this.state.openModal) ? <ModalVideo
              key={this.state.Questions[this.state.questionCount].id}
              id={this.state.Questions[this.state.questionCount].id}
              question={this.state.Questions[this.state.questionCount].question}
              answerChoiceOne={this.state.Questions[this.state.questionCount].answerChoiceOne}
              answerChoiceTwo={this.state.Questions[this.state.questionCount].answerChoiceTwo}
              answerChoiceThree={this.state.Questions[this.state.questionCount].answerChoiceThree}
              answerChoiceFour={this.state.Questions[this.state.questionCount].answerChoiceFour}
              answer={this.state.Questions[this.state.questionCount].answer}
            /> : ""
          // ))

        }
      </div>
    );
  }
}


export default Video;