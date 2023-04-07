const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.337lk0d.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  id: Number,
  name: String,
  number: String,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122"
    })

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})

Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })