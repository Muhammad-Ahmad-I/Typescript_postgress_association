import { timeStamp } from 'console';
import { Request, Response, NextFunction } from 'express';
import { request } from 'http';
const {
  std_course,
  std_details,
  teacher,
  std_class,
  std_classes,
  teacher_class,
} = require('../models/');

exports.getAllStudents = async (req: Request, res: Response) => {
  try {
    const data = await std_details.findAll(
      // { include: ['student_class'] }
      {
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
      }
    );
    res.status(200).send(data);
  } catch (error: any) {
    res.status(500).send(error);
  }
};
exports.addNewStudent = async (req: Request, res: Response) => {
  try {
    const { fname, lname, contactNum, email, instructorName, classes } =
      req.body;

    let findClassId = await std_class.findOne({
      where: {
        class_name: classes,
      },
    });
    var FindTeacherId = await teacher.findOne({
      where: {
        teacherName: instructorName,
      },
    });
    var newUser = await std_details.create({
      firstName: fname,
      lastName: lname,
      contact_num: contactNum,
      classId: findClassId.id,
      email: email,
    });
    await teacher_class.create({
      teacherId: FindTeacherId.id,
      classId: findClassId.id,
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
