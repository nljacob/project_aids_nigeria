import React, {Component} from 'react';
import AuthService from '../../components/AuthService';
import {Link} from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }


   state = {
     email : "",
     password : ""
   }
  // componentWillMount() {
  //   if (this.Auth.loggedIn()) {
  //     this.props.history.replace('/');
  //   }
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    
    if (!this.state.email) {
      alert("Fill email");
    } 
    else if (!this.state.password) {
      alert("Fill password");
    } 
    else{
    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/profile/${res.data.user._id}`);
      })
      .catch(err => alert(err));
    }
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
  };

  render() {
    return (
      <div className="container">
      <br/>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input className="form-control"
                   placeholder="Email"
                   name="email"
                   type="email"
                   id="email"
                   onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input className="form-control"
                   placeholder="Password"
                   name="password"
                   type="password"
                   id="pwd"
                   onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        <br/>
        <p>Don't have an account? Sign up <Link to="/signup">here</Link></p>
      </div>

    );
  }
}

export default Login;