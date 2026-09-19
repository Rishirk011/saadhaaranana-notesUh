import express from "express";
import cors from 'cors';
import 'dotenv/config'
import connectDb from "./config/db.js";
import routes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);



connectDb()

.then(()=>{

  app.listen(process.env.PORT,()=>{
    console.log('port running successfully');
  });

})

.catch((err)=>{
  console.log(err.message);
})



