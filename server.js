import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import mongoose  from "mongoose";
import userRouter from "./src/Routes/userRoutes";
import ToursRouter from "./src/Routes/toursRoute"


dotenv.config("./.env");

const app=express();

app.use(bodyParser.json());

app.use("/user",userRouter);
app.use("/tours",ToursRouter);


app.use("/",(req,res)=> res.status(200).json({
    message: "This is Tour APi"
}));

const dbUrl=process.env.DATABASEURL;

mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
})

export default app;