const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();


 const verifyToken = (req,res,next)=>{
    let token = req.headers["token"];
    if(!token){
        res.status(400).send({message:"No token provided"})
    }else{
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if(err){
                res.status(400).send({message:"Failed to authenticate token"})
            }else{
                req.decoded = decoded;
                next();
            }
        })
    }
}

module.exports = verifyToken;

