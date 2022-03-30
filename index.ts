import express, { Application, Request, Response, NextFunction } from 'express';
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./routes/studentRoute');
const app: Application = express();
app.use(cors());
bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());
app.use('/student', route);
app.listen(3000, () => {
  console.log('server is running on port 3000');
});
