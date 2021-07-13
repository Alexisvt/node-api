import Post from '../models/post.js';

export const getPosts = async (req, res) => {
	try {
		const posts = await Post.find().select('_id title body');
		res.json({ posts });
	}
	catch (err) {
		res.status(500).json({ err });
	}
};

export const createPost = async (req, res) => {
	const post = new Post(req.body);
	const result = await post.save();
	res.status(201).json(result);
};