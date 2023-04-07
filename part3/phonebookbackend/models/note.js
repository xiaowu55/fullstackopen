const mongoose = require('mongoose')


const url = process.env.MONGODB_URI


mongoose.connect(url)
    .then(result=>{
        console.log('connected to MongoDB');
    })
    .catch((error) => { 
        console.log('error connect to MongoDB',error.message);
     })


const noteSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String,
})


noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('Note',noteSchema)