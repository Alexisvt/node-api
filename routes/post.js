const express = require('express');
const { getPosts } = require('../controllers/post');

const route = express.Router();

route.get('/', getPosts)

module.exports = route;