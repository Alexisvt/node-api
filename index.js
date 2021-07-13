import express from 'express';
import expressValidator from 'express-validator';
import helmet from 'helmet';
import morgan from 'morgan';

import mongodbConnection from './mongo.connection.js';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/post.js';

const app = express();

app.use(express.json());
app.use(expressValidator());
app.use(helmet());
app.use(morgan('dev'));
mongodbConnection();

app.use('/', postRoutes);
app.use('/', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server starts on port ${PORT}`);
});