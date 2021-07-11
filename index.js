const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet')
const mongodbConnection = require('./mongo.connection');

const app = express();
app.use(helmet())
app.use(morgan("dev"));
mongodbConnection();

const postRoutes = require('./routes/post')
app.use('/', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server starts on port ${PORT}`)
})