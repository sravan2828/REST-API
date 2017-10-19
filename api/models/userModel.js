'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  mail: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  name: {
    type: String
  },
  password:{
    type: String
  },
  status: {
    type: [{
      type: String,
      enum: ['Pending', 'Created', 'Deleted']
    }],
    default: ['Pending']
  }
});

module.exports = mongoose.model('user', userSchema);
