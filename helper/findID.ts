const {
  std_course,
  std_details,
  teacher,
  std_class,
  std_classes,
  teacher_class,
} = require('../models/');

const findClassId = async (classes: any) => {
  let findClassId = await std_class.findOne({
    where: {
      class_name: classes,
    },
  });
  return findClassId;
};
const FindTeacherId = async (instructorName: any) => {
  var FindTeacherId = await teacher.findOne({
    where: {
      teacherName: instructorName,
    },
  });
  return FindTeacherId;
};
const findUserForLogin = async (email: any) => {
  let finduserByEmail = await std_details.findOne({ where: { email: email } });
  return finduserByEmail;
};
const findAllStudents = async () => {
  let getAllUsers = await std_details.findAll();
  return getAllUsers;
};

module.exports = {
  FindTeacherId,
  findClassId,
  findUserForLogin,
  findAllStudents,
};
