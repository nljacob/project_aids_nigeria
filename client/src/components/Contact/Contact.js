import React, { Component } from 'react';
import axios from 'axios';
import API from '../../utils/API';

class ContactApp extends Component {

      state = {
        message: ""
      };

    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        let data =  {
            name: name,
            email: email,
            message: message
        }
        API.sendEmail(data).then((response) => {
            if (response.data.msg === 'success') {
                this.setState({
                    message: "Message Sent."
                });
                // alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                this.setState({
                    message: "Message failed to send."
                });
                // alert("Message failed to send.")
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
                        {/* <label for="name">Name</label> */}
                        <input type="text"  id="name" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        {/* <label for="exampleInputEmail1">Email address</label> */}
                        <input type="email"  id="email" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        {/* <label for="message">Message</label> */}
                        <textarea className="form-control" rows="5" id="message" placeholder="Comment"></textarea>
                    </div>
                    <button type="submit" className="btn">SUBMIT</button>
                </form>
            </div> 
        )
    }
}


export default ContactApp;