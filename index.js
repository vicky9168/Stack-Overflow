import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app=express()
dotenv.config();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// console.log(__dirname);
app.use(express.json({limit:'30mb',extended:true}))
app.use(express.urlencoded({limit:'30mb',extended:true}))
app.use(cors());

// app.get('/',(req,res)=>{
//     res.send('This is a stack overflow clone API')
// })
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "/client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)

const PORT=process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL ;
mongoose.set('strictQuery',true);

mongoose.connect(DATABASE_URL,{ useNewUrlParser:true})
.then(()=>app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)}))
.catch((err)=>console.log(err.message))
