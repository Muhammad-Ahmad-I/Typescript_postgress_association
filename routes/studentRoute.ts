import express from 'express';
const {getAllStudents} = require('../controller/studentController');
const route = express.Router();

route.get('/',getAllStudents);


module.exports = route;