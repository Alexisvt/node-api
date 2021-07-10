import express from 'express';

import postRoutes from './routes/post';

const app = express();

app.use('/', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server starts on port ${PORT}`)
})