import Post from '../models/post.js';

export const getPosts = (req, res) => {
  res.send("Hello world!");
}

export const createPost = async (req, res) => {
  const post = new Post(req.body);
  const result = await post.save();
  res.status(201).json(result);
}