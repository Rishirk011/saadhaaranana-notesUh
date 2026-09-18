import express from "express";
import cors from 'cors';
import 'dotenv/config'
import connectDb from "./config/db.js";
const app = express();

app.use(cors());
app.use(express.json());




connectDb()

.then(()=>{

  app.listen(process.env.PORT,()=>{
    console.log('port running successfully');
  });

})

.catch((err)=>{
  console.log(err.message);
})



