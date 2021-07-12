import { Router } from 'express';

import { getPosts } from '../controllers/post.js';

const route = Router();

route.get('/', getPosts)

export default route;