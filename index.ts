import express,{Application,Request,Response,NextFunction} from 'express';
const cors = require('cors');
const bodyParser = require('body-parser'); 
const route = require('./routes/studentRoute');


const app:Application = express();
app.use(cors());
bodyParser.urlencoded({extended:true});

app.use('/student',route);
// app.get('/ok', async (req:Request, res:Response, next:NextFunction) => {
  
//     await std_details.findAll({
//         include:[{
//             model:std_course,
//             as:'student_course_detail',
//             attributes:['course_name']
//         }],
//         where:{id:2}
//     })
//       .then((data:any) => {
//         res.status(200).send(JSON.stringify(data));
//       })
//       .catch((err:any) => {
//         console.log(err.message);
//       });
//   });


app.listen(3000,()=>{
            console.log('server is running on port 3000')
})