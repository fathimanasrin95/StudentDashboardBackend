const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ProjectTopicSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    //  enum: ['fullstack', 'machinelearning', 'cybersecurity', 'devops'],
    required: true
  }
  // selectedBy: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Student',
  //   default: null
  // }

})


 const projecttopic= mongoose.model('ProjectTopic', ProjectTopicSchema);
 module.exports = projecttopic