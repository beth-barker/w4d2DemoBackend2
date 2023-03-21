
// Required code to use our node packages

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


//Destructure. Look into the controller file and grab the getMovies property from controller file

const {getMovies, createMovie, deleteMovie, updateMovie} = require(`./controller`)

//set up first endpoint to pull movies from the database
app.get(`/api/movies`, getMovies)

//second enpoint to add something new into our database with a post
app.post(`/api/movies`, createMovie)

//endpoint with a parameter of id to delete a specific movie 
app.delete(`/api/movies/:id`, deleteMovie)

//endpoint that takes an id and adds or subtracts from the rating 
app.put(`/api/movies/:id`, updateMovie)



app.listen(4004, () => console.log(`Ready to rock on port 4004!`))
