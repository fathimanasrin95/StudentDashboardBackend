const ProjectTopic = require('../Models/topicModel')
// const Student =require('../Models/studentModel')

//get all project topics for a specific batch

const  getTopics =  async (req, res) => {
  // const projectId = req.params.id;
  const batch = req.params.batch();
    try {
      const projectTopics = await ProjectTopic.find({ batch:batch })
      res.status(200).json(projectTopics)
    } catch (error) {
      res.status(500).json({ error: 'Error fetching topics' })
    }
  }


  //select a project topic here need to change studentId=req.student.id;

   const selectTopics = async (req, res) => {
    const projectId = req.params.id;
  const studentId = req.body.studentId;

    try {
      const projectTopic = await ProjectTopic.findById(projectId);
    if (!projectTopic) {
      return res.status(404).json({ message: 'Project topic not found' });
    }
    if (projectTopic.selectedBy) {
      return res.status(400).json({ message: 'Project topic already selected' });
    }

    projectTopic.selectedBy = studentId;
    await projectTopic.save();

    // Update student's selectedProject in Student collection
    await Student.findByIdAndUpdate(studentId, { selectedProject: projectId });

    res.json(projectTopic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  }


 module.exports = {getTopics,postTopics,selectTopics}