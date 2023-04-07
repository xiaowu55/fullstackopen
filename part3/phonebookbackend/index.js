const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

require('dotenv').config()
const Note = require('./models/note')


const app = express()

app.use(express.json())
app.use(cors())

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    }
  
    next(error)
  }


morgan.token('content',function getContent(req){
    return  JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :response-time :content ')
)


app.get('/api/persons',(request,response) => { 
    Note.find({}).then(notes=>{
        response.json(notes)
    })
   
 })

app.get('/info',(request,response) => { 
    response.send(`
    <p>Phonebook has info for ${notes.length} people</p>
    <p>${new Date}</p>
    `)
 })

 app.get('/api/persons/:id',(request,response) => { 
    // const id = Number(request.params.id)
    // const people = notes.find(people=>people.id===id)

    // if(people){
    //     response.json(people)

    // }else{
    //     response.status(404).end()
    // }


    Note.findOne({id:Number(request.params.id)}).then(note => {
        if(note){
            response.json(note)
        }else{
            response.status(404).end()
        }
      }).catch(error=>{
        console.log(error)
        response.status(400).send({ error: 'malformatted id' })
    })
  })

app.delete('/api/persons/:id',(request,response) => { 
    const id = Number(request.params.id)
    notes = notes.filter(people=>people.id!==id)
    response.status(204).end()
 })

 app.post('/api/persons',(request,response) => { 
    const id = Math.random()*100000
    const body = request.body
    

    if(!(body.name&&body.number)){
        return response.status(400).json(
            {error:'content missing'}
        )
    }
    
    // if(notes.find(people=>people.name===body.name)){
    //     return response.status(400).json(
    //         {error:'name must be unique'}
    //     )
    // }

    const people = new Note({
        id:id,
        name:body.name,
        number:body.number
    })

  
    people.save().then(saveNote=>response.json(saveNote)
    )
  })


  app.use(errorHandler)
const PORT =  process.env.PORT
 app.listen(PORT,() => { 
    console.log(`server running on port ${PORT}`);
  })
