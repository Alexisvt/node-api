import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import postRoutes from './routes/post';

const app = express();
app.use(helmet())
app.use(morgan("dev"));

app.use('/', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server starts on port ${PORT}`)
})