const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const studentdashRouter = require('./Routers/studentdashRouter')

async function main(){
    await mongoose.connect(process.env.MONGODB_URL)
}

app.use(express.json())
app.use(cors())

main()
.then(console.log('Connected to DB'))
.catch(err=>console.log(err))




app.use('/',studentdashRouter)


const port=process.env.PORT || 5000
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})