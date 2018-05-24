import React, { Component } from 'react';
import axios from 'axios';
import API from '../../utils/API';
class ContactApp extends Component {
    state = {
        message: "",
        name: "",
        email: "",
        comment: "",
        submitFlag: false
    };
    checkFieldErrorMessage(field) {
        let formControl = "form-control";
        switch (field) {
            case "name":
                if (!this.state.name && this.state.submitFlag) {
                    formControl = "form-control error-focus";
                }
                break;
            case "email":
                if (!this.state.email && this.state.submitFlag) {
                    formControl = "form-control error-focus";
                }
                break;
            case "comment":
                if (!this.state.comment && this.state.submitFlag) {
                    formControl = "form-control error-focus";
                }
                break;
            default:
                formControl = "form-control";
        }
        return formControl;
    }
    inputFieldValidation() {
        if (!this.state.name || !this.state.email || !this.state.comment) {
            return (false);
        }
        else {
            return (true);
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        let data = {
            name: name,
            email: email,
            message: message
        }
        // If forms are not filled out don't send the email
        API.sendEmail(data).then((response) => {
            if (response.data.msg === 'success') {
                this.setState({
                    message: "Message Sent."
                });
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                this.setState({
                    message: "Message failed to send."
                });
            }
        });
        
    }
    resetForm() {
        document.getElementById('contact-form').reset();
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        Name: <br /> <input
                            className={this.checkFieldErrorMessage("name")}
                            type="text"
                            id="name"
                            // name="name"
                            onChange={this.handleInputChange}
                            value={this.state.name}
                        />
                        {(!this.state.name && this.state.submitFlag) ? <div className="error-text">Name required</div> : " "}
                    </div>
                    <div className="form-group">
                        Email: <br /> <input
                            className={this.checkFieldErrorMessage("email")}
                            type="text"
                            // name="email" 
                            id="email"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                        />
                        {(!this.state.email && this.state.submitFlag) ? <div className="error-text">Email required</div> : " "}
                    </div>
                    <div className="form-group">
                        Comment: <br /> <input
                            className={this.checkFieldErrorMessage("comment")}
                            type="text"
                            // name="comment" 
                            id="message"
                            onChange={this.handleInputChange}
                            value={this.state.comment}
                        />
                        {(!this.state.comment && this.state.submitFlag) ? <div className="error-text">Comment required</div> : " "}
                    </div>
                    {/* <div className="form-group">
                        <input type="text" id="name" placeholder="Name" />
                        </div> */}
                    {/* // <div className="form-group">
                        //     <input type="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                        // </div>
                        // <div className="form-group">
                        //     <textarea className="form-control" rows="5" id="message" placeholder="Comment"></textarea>
                        // </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default ContactApp;