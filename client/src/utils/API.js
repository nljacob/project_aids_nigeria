import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', {username: username, email: email, password: password});
  },
  // save prospective club sponsor's application and test score
  saveApplication: (sponsorFirstName, sponsorLastName, sponsorImageLink, sponsorEmail, sponsorRolePosition, sponsorAboutMe, sponsorAboutMySchool, sponsorWhyInterested, sponsorTestScore) => {
    return axios.post('/api/certification', {
      // selectedOption: selectedOption,
      sponsorFirstName: sponsorFirstName,
      sponsorLastName: sponsorLastName,
      sponsorImageLink: sponsorImageLink,
      sponsorEmail: sponsorEmail,
      sponsorRolePosition: sponsorRolePosition,
      sponsorAboutMe: sponsorAboutMe,
      sponsorAboutMySchool: sponsorAboutMySchool, 
      sponsorWhyInterested: sponsorWhyInterested,
      sponsorTestScore: sponsorTestScore
    });
  },
  // forDomale: (sponsorFirstName) => {
  //   return axios.get('/api/certification', {sponsorFirstName: sponsorFirstName});
  // }
  forDomale: () => {
    return axios.get('/api/certification');
  },

  sendEmail: (data) => {
    return axios.post('/api/send', data);
  }
};
