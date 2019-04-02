class Post {
  constructor(title,body,postId) {
    this.title = title
    this.body = body
    this.postId = postid
    this.comments = []
  }
}

modules.exports = Post
