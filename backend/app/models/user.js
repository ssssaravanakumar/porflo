const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  
  userName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024
  },
  occupation: {
    type: String,
    required: false,
    maxlength: 1024
  },
  education: {
    type: String,
    required: false,
    minlength: 6,
    maxlength: 1024
  },
  industry: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024
  },
  skills: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024
  },
  orgName: {
    type: String,
    required: false,
    minlength: 6,
    maxlength: 1024
  },
  accomplishments : {
    type: String,
    required: false,
    minlength: 6,
    maxlength: 1024
  }, 
  location: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: false,
    minlength: 6,
    maxlength: 1024
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    unique: true
  },
  mobile: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    maxlength: 1024
  },
  avatar: {
    type: String,
    required: false
  },
  linkFacebook: {
    type: String,
    required: false,
    maxlength: 255
  },
  linkLinkedin: {
    type: String,
    required: false,
    maxlength: 255
  },
  linkTwitter: {
    type: String,
    required: false,
    maxlength: 255
  },
  linkInstagram: {
    type: String,
    required: false,
    maxlength: 255
  },
  linkYoutube: {
    type: String,
    required: false,
    maxlength: 255
  },
  date: {type: Date, default: Date.now},
  isActive: {type: Boolean, default: false}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema)
