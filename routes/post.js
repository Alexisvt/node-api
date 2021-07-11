import express from 'express';

import { getPosts } from '../controllers/post';

const route = express.Router();

route.get('/', getPosts)

export default route;