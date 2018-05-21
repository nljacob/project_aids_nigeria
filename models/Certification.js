const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let CertSchema = new Schema({
  sponsorFirstName: {
    type: String,
    required: true,
    trim: true
  },
  sponsorLastName: {
    type: String,
    required: true,
    trim: true
  },
  sponsorImageLink: {
    type: String,
    required: true
    // trim: true
  },
  sponsorEmail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: {
      unique: true
    }
  },
  sponsorRolePosition: {
    type: String,
    required: true,
    trim: true
  },
  sponsorAboutMe: {
    type: String,
    required: true
  },
  sponsorAboutMySchool: {
    type: String,
    required: true
  },
  sponsorWhyInterested: {
    type: String,
    required: true
  },
  sponsorTestScore: {
    type: String
    // required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Certification', CertSchema);