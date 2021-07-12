import { Router } from 'express';

import { createPost, getPosts } from '../controllers/post.js';

const route = Router();

route.get('/', getPosts)
route.post("/post", createPost)

export default route;