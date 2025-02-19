const { uniqueId } = require('lodash');
const mongoose = require('mongoose');


//Define the person schema
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required : true
  },
  age: {
    type: Number
  },
  work:{
    type: String,
    enum: ['chef','waiter','manager'],
    required :true
  },
  mobile:{
    type: String,
    required: true
  },
  email :{
    type: String,
    required: true,
    unique: true
  },
  address :{
    type: String
  },
  salary:{
    type: Number,
    required: true
  }

});

// Create Person model
const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;
