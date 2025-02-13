const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    // enum: ['fullstack', 'machinelearning', 'cybersecurity', 'devops'],
    required: true
  },
  selectedTopic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProjectTopic',
    default: null,
  }

})
const Student = mongoose.model('Student', StudentSchema)

module.exports = Student
