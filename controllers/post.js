import Post from '../models/post.js';

export const getPosts = (req, res) => {
  res.send("Hello world!");
}

export const createPost = (req, res) => {
  const post = new Post(req.body);
  post.save((err, result) => {
    if (err) {
      return res.status(400).json({ message: err })
    }

    res.status(201).json(result)
  })
}