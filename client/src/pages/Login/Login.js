import React, { Component } from 'react';
import AuthService from '../../components/AuthService';
import { Link } from 'react-router-dom';
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }


  state = {
    email: "",
    password: "",
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

    if (this.state.email && this.state.password) {

      this.Auth.login(this.state.email, this.state.password)
        .then(res => {
          // once user is logged in
          // take them to their profile page
          this.props.history.replace(`/profile/${res.data.user._id}`);
        })
        .catch(err => {
            this.setState({serverCheck : "fail"});
          });
          // err => alert(err);
    }
   
  };

  resetForm = () => {
    this.setState({
      email : "",
      password : ""
    })
  }

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

  render() {
    return (
      <div className="login-page">
      <div className="container">
        <div className="row">
        <div className="col-4"></div>
          <div className="col-4 text-center">
            <br/>
            <br/>
            <br/> 
            <br/>
            <h1 id="login">Log In</h1>
            <br/>
            <br/>
            <form onSubmit={this.handleFormSubmit}>
              
              <div className="form-group">
                <label htmlFor="email"></label>
                <input className={this.checkEmailError()}
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  id="email"
                  onChange={this.handleChange} />
                {(!this.state.email && this.state.submitFlag) ? <div className="error-text">Email Required</div> : " "}
              </div>

              <div className="form-group">
                <label htmlFor="pwd"></label>
                <input className={this.checkPasswordError()}
                  placeholder="Password"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={this.handleChange} />
                {(!this.state.password && this.state.submitFlag) ? <div className="error-text">Password Required</div> : " "}
              </div>

              {((this.state.serverCheck === "fail") && this.state.submitFlag) ? <div><div className="error-text">Invalid Email/Password </div><br/></div>  : " "}

              <br/>
              <button type="submit" className="btn" onSubmit={this.resetForm}>SUBMIT</button>

            </form>
 
            <br/>
            <p>Don't have an account? Sign up <Link id="here" to="/signup">here.</Link></p>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      </div>
    );
  }
}
export default Login;