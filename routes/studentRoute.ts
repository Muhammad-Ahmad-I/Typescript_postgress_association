import express from 'express';
const controller = require('../controller/studentController');
// import controller from '../controller/studentController'
const route = express.Router();

route.get('/',controller.getAllStudents);
route.post('/add',controller.addNewStudent);
route.delete('/remove/:id',controller.deleteStudent)
route.put('/update/:id',controller.updateStudent)


module.exports = route;