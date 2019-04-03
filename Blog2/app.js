const express = require('express')
const app = express()
const models = require('./models')
const path = require('path')
const bodyParser =require('body-parser')

var mustacheExpress = require('mustache-express');

app.use(bodyParser.urlencoded({ extended: false }))
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

const VIEWS_PATH = path.join(__dirname, '/views')

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))


app.get('/index', (req,res, next) => {
  models.Post.findAll().then(function(posts){
      res.render('index', {posts: posts})
  })
});


app.post('/addpost', function(req, res){

  let post = models.Post.build({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category,
  })

  post.save().then(function(newPost){
    console.log(newPost)
  })
  res.redirect('/index')
});

app.listen(3000,() => {
    console.log("Server is online...")
  })

app.post('/deletepost', function(req, res){
  models.Post.findOne({
    where: {
    id: req.body.postId
  }
  }).then(function(deletedPost) {
    return deletedPost.destroy()
  }).then(function(){
    res.redirect('/index')
  })
})


app.get("/update/:id", function(req, res) {
  let id = req.params.id;
  console.log(id)
  models.Post.findOne({
    where: {
      id: id
    }
  }).then(function(post) {
    res.render("update", {post: post });
  });
});

app.post('/updatepost', function(req,res) {
  let updatedPost = {
    title: req.body.title,
    body: req.body.body,
    category: req.body.category,
  };

  models.Post.findOne({
    where: {
      id: req.body.postId
    }
  }).then(function(post) {
    post.update(updatedPost);
    res.redirect('/index');
  });
})




// const posts = models.posts.build({
//   title: "My Third Blog Title",
//   body: "This is the body of my third Blog",
//   category: "Shit I don't want to be doing"
// })

// fetch a post by ID
// models.posts.findById(1).then(function(posts){
//   console.log(posts)
// })


//delete a post
// models.posts.destroy({
//   where: {
//     title: 'My Blog Title'
//   }
// }).then(function(){
//
// })


//fetch all posts
// models.posts.findAll().then(function(posts){
//   console.log(posts)
// })

// fetch a particular posts
// models.posts.findOne({
//   where:{
//     title:"My Blog Title"
//   }
// }).then(function(posts) {
//   console.log(posts)
// })



// Saving a new post
// posts.save().then(function(newPost){
//   console.log(newPost)
// })



// findOne method with no filter
// models.posts.findOne().then(function(posts) {
//   console.log(posts)
// })
