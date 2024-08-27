import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import usersRouter  from './routers/user.route.js';
import db from './config/db.js';


// Get the file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = dirname(__filename);

const app=express();
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api/users",usersRouter )

//ROUTING MANAGEMENT

//api/users : GET
//api/users:id : GET
//api/users : POST
//api/users:id : patch
//api/users:id : DELETE

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/./views/index.html")
})

//rout not found handling
app.use((req,res,next)=>{
    res.status(404).json({
        message : "route not found"
    })
})

//server error handling
app.use((err,req,res,next)=>{
    res.status(500).json({
        message : "something is broken"
    })
})
export default app;