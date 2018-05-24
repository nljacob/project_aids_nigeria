import React, { Component } from 'react';
import axios from 'axios';
import API from '../../utils/API';
import '../../pages/Contact/Contact.css';

class ContactApp extends Component {

    state = {
        message: "",
        name: "",
        email: "",
        comment: "",
        submitFlag: false
    };

    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;
        let data = {
            name: name,
            email: email,
            comment: comment
        }

        this.setState({
            submitFlag: true
        });

        // If forms are not filled out don't send the email
        if (this.state.email && this.state.name && this.state.comment) {

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
        } else {
            console.log("Contact Page failed.");
        }

    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    
      };

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    checkEmailError() {
        if (!this.state.email && this.state.submitFlag) {
            return ("form-control error-focus");
        }
        else {
            return ("form-control");
        }
    }

    checkNameError() {
        if (!this.state.name && this.state.submitFlag) {
            return ("form-control error-focus");
        }
        else {
            return ("form-control");
        }
    }

    checkCommentError() {
        if (!this.state.comment && this.state.submitFlag) {
            return ("form-control error-focus");
        }
        else {
            return ("form-control");
        }
    }

    render() {
        return (
            <div>
                <div id="confirm-message">{this.state.message}</div>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

                    <div className="form-group">
                        <label htmlFor="name"></label> Name:
                        <input className={this.checkNameError()}
                            name="name"
                            type="name"
                            id="name"
                            onChange={this.handleChange} />
                        {(!this.state.name && this.state.submitFlag) ? <div className="error-text">Name Required</div> : " "}
                    </div>

                    <div className="form-group"> 
                        <label htmlFor="email"></label> Email:
                        <input className={this.checkEmailError()}
                            // placeholder="Email Address"
                            name="email"
                            type="email"
                            id="email"
                            onChange={this.handleChange} />
                        {(!this.state.email && this.state.submitFlag) ? <div className="error-text">Email Required</div> : " "}
                    </div>

                    <div className="form-group">
                        <label htmlFor="comment"></label> Comment:
                        <textarea className={this.checkCommentError()}
                            // placeholder="Email Address"
                            name="comment"
                            type="comment"
                            id="comment"
                            onChange={this.handleChange} />
                        {(!this.state.comment && this.state.submitFlag) ? <div className="error-text">Comment Required</div> : " "}
                    </div>
                    <button type="submit" className="btn btn-info" onSubmit={this.resetForm}>Submit</button>
                </form>
            </div>
        )
    }
}


export default ContactApp;