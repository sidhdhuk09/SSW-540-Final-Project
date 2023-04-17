const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const facultySchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactno: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    officehours: {
        type: String,
        required: true
    },
    loc:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },

  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});


module.exports = mongoose.model('facultys', facultySchema);