import React, { Component } from 'react';
// import withAuth from '../../components/withAuth';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
// import BlogElement from '../../components/Blog/Blog';
import OneApplicant from '../../components/OneApplicant/OneApplicant';

class DomaleOnly extends Component {

  state = {
    sponsorApplicants: [],
    sponsorFirstName: ""
  };

  componentDidMount() {
    API.forDomale().then(res => {
      this.setState({
        sponsorApplicants : res.data
        // sponsorFirstName: res.data[1].sponsorFirstName
      })
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <h1>Welcome Domale!</h1>
        <br />
        <h2>Prospective PAN Club Sponsors:</h2>
        <ul>
            {this.state.sponsorApplicants.map(oneApplicant => (
                <OneApplicant
                    key={oneApplicant._id}
                    id={oneApplicant._id}
                    first={oneApplicant.sponsorFirstName}
                    last={oneApplicant.sponsorLastName}
                    img={oneApplicant.sponsorImageLink}
                    email={oneApplicant.sponsorEmail}
                    role={oneApplicant.sponsorRolePosition}
                    about={oneApplicant.sponsorAboutMe}
                    aboutSchool={oneApplicant.sponsorAboutMySchool}
                    why={oneApplicant.sponsorWhyInterested}
                    score={oneApplicant.sponsorTestScore}
                    // date={oneApplicant.createdAt}
                />

                // oneApplicant.sponsorFirstName
            ))}
        </ul>
      </div>
    )
  }
}

export default DomaleOnly;