const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const StudentSchema = new Schema({
  rollNumber: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  standard: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
})

module.exports = Student = mongoose.model('student', StudentSchema)
