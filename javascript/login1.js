import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import {dirname} from "path";
import { fileURLToPath } from "url";

const  __filename = fileURLToPath(import.meta.url);

const app=express();
app.use(bodyParser.urlencoded( { extended: true } ));

app.get("/",(req,res)=>{
    res.sendFile(__filename + "/login.html");
});
let logindet="";

function loginres(req,res,next){
    logindet= res.body["email"]+res.body['password'];
    next();
}

app.post("/register",(req,res)=>{
    res.send(`Your details are ${logindet}`);
    console.log("posted successfully")
});

app.listen(3001,()=>{
    console.log("server is running");
});

