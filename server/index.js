require('dotenv').config();
const express = require("express");
const cors = require('cors')
const app = express();
const connectDb = require('./utils/db') 

const corsOptions = {
    origin : "http://localhost:3000",
    method : "GET , POST , PUT , PATCH , DELETE , HEAD",
    Credential : true
}

app.use(cors(corsOptions))
app.use(express.json())

const authRouter = require("./router/auth-router");

app.use("/api/auth", authRouter);

const PORT = 5000;

connectDb().then( ()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port N0. ${PORT}`);
    })
}).catch((e)=>{
    console.log("server connection failed");
})

