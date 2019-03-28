const express = require('express')
const uuidv1 = require('uuid/v1')
const router = express.Router()


router.get('/',(req,res) => {
  res.render('index')
})

let movies = []

router.get('/movie-details', (req, res) => {
  res.render("movie-details", {movies: movies})
})

router.post("/addMovie", (req, res) => {
  let title = req.body.movieTitle
  let image = req.body.movieImage
  let genre = req.body.movieGenre
  let description = req.body.movieDescription

  let movie = {id: uuidv1(), title: title, image: image, genre: genre, description: description}
  console.log(movie)
  movies.push(movie)
  res.redirect("/movies/movie-details")
})

router.post('/remove-movie', (req, res) => {

  let uuid = req.body.removeID

  movies = movies.filter(function(idcode) {
  return idcode.id != uuid
})
  res.redirect('/movies/movie-details')
})


module.exports = router
