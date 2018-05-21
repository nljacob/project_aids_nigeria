import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../components/AuthService';
import API from '../../utils/API';
import "./Signup.css";

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }


  state = {
    email: "",
    password: "",
    username: "",
    submitFlag: false,
    serverCheck : ""
  }
  // componentWillMount() {
  //   if (this.Auth.loggedIn()) {
  //     this.props.history.replace('/');
  //   }
  // }

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({
      submitFlag: true
    });

    if (this.state.email && this.state.password && this.state.username) {
      API.signUpUser(this.state.username, this.state.email, this.state.password)
        .then(res => {
          console.log(res.data);
          // once the user has signed up
          // send them to the login page
          this.props.history.replace('/login');
        })
        .catch(err => {
          this.setState({serverCheck : "fail"});
        });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  checkEmailError(){
    if (!this.state.email && this.state.submitFlag) {
      return ("form-control error-focus"); 
    }
    else if ((this.state.serverCheck === "fail") && this.state.submitFlag){
      return ("form-control error-focus"); 
    }
    else {
      return ("form-control");
    }
  }

  checkPasswordError(){
    if (!this.state.password && this.state.submitFlag) {
      return ("form-control error-focus"); 
    }
    else if ((this.state.serverCheck === "fail") && this.state.submitFlag){
      return ("form-control error-focus"); 
    }
    else {
      return ("form-control");
    }
  }
  checkUsernameError(){
    if (!this.state.username && this.state.submitFlag) {
      return ("form-control error-focus"); 
    }
    else if ((this.state.serverCheck === "fail") && this.state.submitFlag){
      return ("form-control error-focus"); 
    }
    else {
      return ("form-control");
    }
  }

  render() {
    return (
      <div className="container">
        <br />
        <h1>Signup</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input className={this.checkUsernameError()}
              placeholder="Username"
              name="username"
              type="text"
              id="username"
              onChange={this.handleChange} />
               {(!this.state.username && this.state.submitFlag) ? <div className="error-text">Username required</div> : " "}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input className={this.checkEmailError()}
              placeholder="Email"
              name="email"
              type="email"
              id="email"
              onChange={this.handleChange} />
                {(!this.state.email && this.state.submitFlag) ? <div className="error-text">Email required</div> : " "}
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input className={this.checkPasswordError()}
              placeholder="Password"
              name="password"
              type="password"
              id="pwd"
              onChange={this.handleChange} />
               {(!this.state.password && this.state.submitFlag) ? <div className="error-text">Password required</div> : " "}
          </div>
          {((this.state.serverCheck === "fail") && this.state.submitFlag) ? <div><div className="error-text"> Username or Email already exists </div><br/></div>  : " "}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <br />
        <p>Already have an account? Login <Link to="/login">here.</Link></p>
      </div>
    );
  }
}

export default Signup;