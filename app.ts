import express,{Application,Request,Response,NextFunction} from 'express';
const db: any = require('./models/index');
const app:Application = express();


const add = (a:number,b:number):number => a+b;

app.get('/',(req: Request, res: Response, next: NextFunction )=>{
    console.log(add(6,4))
    res.send('hello world')
})

app.listen(3000,()=>{
console.log('server is running on port 3000')
})