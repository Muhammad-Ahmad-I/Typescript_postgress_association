import express from 'express';
const controller = require('../controller/studentController');
// import controller from '../controller/studentController'
const route = express.Router();
const { Protected } = require('../middleware/authMiddle');

route.post('/login', controller.studentLogin);
route.get('/', Protected, controller.getAllStudents);
route.post('/add', controller.addNewStudent);
route.delete('/remove/:id', Protected, controller.deleteStudent);
route.put('/update/:id', Protected, controller.updateStudent);

module.exports = route;
