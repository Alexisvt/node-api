import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import mongodbConnection from './mongo.connection.js';
import postRoutes from './routes/post.js';

const app = express();
app.use(helmet())
app.use(morgan("dev"));
mongodbConnection();

app.use('/', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server starts on port ${PORT}`)
})