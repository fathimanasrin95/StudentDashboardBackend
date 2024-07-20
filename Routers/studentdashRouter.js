const express = require('express')
const { getTopics, selectTopics,studentDetail } = require('../Controllers/studentdashController')
const studentdashRouter = express.Router()
//require auth middleware like const auth=require('../middleware/auth')  auth.js lu Student model require cheyyanam
///:batch,auth,getTopics
studentdashRouter.get('/getproject',getTopics)

///select/:id ,auth,selectTopics
studentdashRouter.put('/:id/select',selectTopics)




module.exports = studentdashRouter