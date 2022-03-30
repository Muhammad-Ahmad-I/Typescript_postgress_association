import { Request, Response, NextFunction } from 'express';
const jsnWebTkn = require('jsonwebtoken');
const Model = require('../models/');
const findUser = require('../helper/findID');

exports.Protected = async (req: Request, res: Response, next: NextFunction) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jsnWebTkn.verify(token, 'jhjddkjfhalkajhdfkjhasdfhk');
      //   console.log('decoded:  ', decoded);
      let user = await findUser.findUserForLogin(decoded.email);
      //   if (user) {
      //     var students = await findUser.findAllStudents();
      //   }
      //   console.log('usersssss: ', user);
      next();
    } catch (error) {
      res.status(401).send('not authorized');
    }
  }
};
