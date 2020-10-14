import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import path from 'path';
import './database/connection';

import errorHandler from './errors/handler';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333, () => {
  console.log('Sever is running!!');
});