import { Router } from 'express';

import { createPost, getPosts } from '../controllers/post.js';
import { createPostValidator } from '../validator/index.js';

const route = Router();

route.get('/', getPosts)
route.post('/post', createPostValidator, createPost)


export default route;