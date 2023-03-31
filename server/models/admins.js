const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const adminsSchema = new Schema({
   Username: {
    type : String,
    required: true
   },
   Password: {
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


module.exports = mongoose.model('admins', adminsSchema);