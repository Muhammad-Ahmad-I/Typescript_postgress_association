import { Request, Response } from 'express';
const { passwordEncryption } = require('../helper/Bcrypt');
const bcrypt = require('bcrypt');
const { generateToken } = require('../auth');
const {
  findClassId,
  FindTeacherId,
  findUserForLogin,
} = require('../helper/findID');
const {
  std_course,
  std_details,
  teacher,
  std_class,
  teacher_class,
} = require('../models/');

exports.studentLogin = async (req: Request, res: Response) => {
  const { email1, password1 } = req.body;
  const { email, password, userName } = await findUserForLogin(email1);
  try {
    let comparePassword = await bcrypt.compare(password1, password);
    if (email && comparePassword) {
      let jwtToken = await generateToken(userName, email);
      res.status(200).send({ token: jwtToken });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllStudents = async (req: Request, res: Response) => {
  try {
    const data = await std_details.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email'],
      include: [
        {
          model: std_class,
          as: 'student_class',
          attributes: ['class_name'],
          include: [
            { model: teacher, as: 'teacher', attributes: ['teacherName'] },
          ],
        },
      ],
    });
    res.status(200).send(data);
  } catch (error: any) {
    res.status(500).send(error);
  }
};
exports.addNewStudent = async (req: Request, res: Response) => {
  try {
    const {
      fname,
      lname,
      contactNum,
      email,
      instructorName,
      classes,
      password,
    } = req.body;
    const pass = await passwordEncryption(password);
    const cId = await findClassId(classes);
    const tId = await FindTeacherId(instructorName);
    await std_details.create({
      firstName: fname,
      lastName: lname,
      contact_num: contactNum,
      classId: cId.id,
      email: email,
      password: pass,
    });
    await teacher_class.create({
      teacherId: tId.id,
      classId: cId.id,
    });
    res.status(200).send(' student added');
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send(error);
  }
};
exports.deleteStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await std_details.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send('record has been deleted');
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.updateStudent = async (req: Request, res: Response) => {
  const { fName, lName, email, contact_num } = req.body;
  const id = req.params.id;
  try {
    const student = std_details.update(
      {
        firstName: fName,
        lastName: lName,
        email: email,
        contact_num: contact_num,
      },
      {
        where: { id: id },
      }
    );
    res.status(200).send('record has been updated');
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
