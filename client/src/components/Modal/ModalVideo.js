import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
 
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
   
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
       
  class ModalVideo extends React.Component {
    constructor() {
      super();
   
      this.state = {
        modalIsOpen: false,
<<<<<<< HEAD
        selectedOption: 0
=======
        selectedOption: 0,
        message: ""
>>>>>>> dc45c8a68e2baeb9410ca4155fb3d8f8f51c12fb
      };
   
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
      // this.openModal(true)
      this.setState({
        modalIsOpen: true
      });
    }
   
    openModal = () => {
      this.setState({modalIsOpen: true});
    }
   
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      // this.subtitle.style.color = '#f00';
    }
   
    closeModal() {
      this.setState({modalIsOpen: false});
    }
   
    submitForm = (event, props) => {
      var letterArray = [" A"," B"," C"," D"]
      console.log(this.props);
      if (this.props.answer == this.state.selectedOption)
      {
<<<<<<< HEAD
        alert("Correct Answer!");
      }
      else {
        alert("False, the correct answer was" + letterArray[this.props.answer -1]);
=======
        this.setState({
          message: "Correct Answer!"
        })
      }
      else {
        this.setState({
          message: "False, the correct answer was" + letterArray[this.props.answer -1]
        })
>>>>>>> dc45c8a68e2baeb9410ca4155fb3d8f8f51c12fb
      }
    }
  
    handleOptionChange =  changeEvent => {
      this.setState({
        selectedOption: changeEvent.target.value
      });
      console.log("change event target: " + changeEvent.target.value)
    }

    render() {
      return (
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
   
            {/* <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2> */}
            {/* <button type="button" class="btn btn-secondary" onClick={this.closeModal}>close</button> */}
            {/* <div>I am a modal</div> */}
<<<<<<< HEAD
=======
            <div className="text-center" id="modal-message">{this.state.message}</div>
>>>>>>> dc45c8a68e2baeb9410ca4155fb3d8f8f51c12fb
            <div>{this.props.question}</div>
            <form>
              <fieldset>
                {/* <legend>Radio buttons</legend> */}
                <label>
                  <input id="radio-a" name="radios" type="radio" value='1' checked={this.state.selectedOption === '1'} onChange={this.handleOptionChange}/> A: {this.props.answerChoiceOne}
                </label>
                <br />
                <label>
                  <input id="radio-b" name="radios" type="radio" value='2' checked={this.state.selectedOption === '2'} onChange={this.handleOptionChange}/> B: {this.props.answerChoiceTwo}
                </label>
                <br />
                <label>
                  <input id="radio-c" name="radios" type="radio" value='3' checked={this.state.selectedOption === '3'} onChange={this.handleOptionChange}/> C: {this.props.answerChoiceThree}
                </label>
                <br />
                <label>
                  <input id="radio-d" name="radios" type="radio" value='4' checked={this.state.selectedOption === '4'} onChange={this.handleOptionChange}/> D: {this.props.answerChoiceFour}
                </label>
              </fieldset>
<<<<<<< HEAD
              <button type="button" className="btn btn-primary" onClick={this.submitForm} id="Submit Button">Submit</button> &nbsp;
              <button type="button" class="btn btn-secondary" onClick={this.closeModal}>Close</button>
=======
              <button type="button" className="btn btn-info" onClick={this.submitForm} id="Submit Button">Submit</button> &nbsp;
              <button type="button" class="btn btn-info" onClick={this.closeModal}>Close</button>
>>>>>>> dc45c8a68e2baeb9410ca4155fb3d8f8f51c12fb
            </form>
           
          </Modal>
        </div>
      );
    }
  }

  export default ModalVideo;