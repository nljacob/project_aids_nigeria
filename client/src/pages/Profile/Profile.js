import React, { Component } from 'react';
import withAuth from '../../components/withAuth';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import BlogElement from '../../components/Blog/Blog'
import "./Profile.css";

class Profile extends Component {

  state = {
    username: "",
    email: ""
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
  }

  render() {
    return (
      <div className="profile-page">
      <div className="container Profile">
      <br/>
      <br/>
        <h3 className="text-center">Welcome {this.state.username}!</h3>
        <br/>
        <BlogElement />
      </div>
      </div>
    )
  }
}

export default withAuth(Profile);