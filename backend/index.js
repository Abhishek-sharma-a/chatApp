import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import morgan from "morgan"
import userRouter from "./routes/user.js"

// mongo password= Age35yKF0L10np0M
// mongo username= abhi07on
// mongo connection string = mongodb+srv://abhi07on:<password>@cluster0.moksbdl.mongodb.net/?retryWrites=true&w=majority

const app=express();
app.use(morgan("dev"))
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use("/users",userRouter);  //http://localhost:5000/user/signup
const MONGODB_URL="mongodb+srv://abhi07on:Age35yKF0L10np0M@cluster0.moksbdl.mongodb.net/tour_db?retryWrites=true&w=majority"
const port =5000;

mongoose.connect(MONGODB_URL)
.then(()=>{
    app.listen(port,()=>console.log(`server running on port ${port}`));
    })
.catch((error)=>console.log(`${error} did not connect`))