import {Request,Response,NextFunction} from 'express';
const {std_course,std_details} = require('../models/');


const getAllStudents = async(req:Request,res:Response) => {
        
    try {
        const data = await std_details.findAll(
            // {
            //         include:[{
            //             model:std_course,
            //             as:'student_course_detail',
            //             attributes:['course_name']
            //         }],
            //         // where:{id:2}
            //     }
            );
        res.status(200).send(data);
    } catch (error) {
     res.status(500).send(error);
    } 
}
const createUser = (req:Request,res:Response)=>{
const {fname,lname,contactNum,email} = req.body;
}
    try {
         std_details.create({
            // firstName:fname,

        })
    } catch (error) {
        
    }
module.exports = {
    getAllStudents
}