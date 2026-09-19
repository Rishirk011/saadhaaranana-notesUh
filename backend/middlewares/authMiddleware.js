import mongoose from 'mongoose';
import userModel from '../models/userModel.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

const protect = (asyncHandler(async (req,res) => {

    let token;
    if(req.headers,authorization && req.headers,authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await userModel.findBy(decoded.id).select('-password');

            next();
        }
        catch(err){
            res.status(401);
            throw new Error("user not found!");
        }
    }
    if(!token){
        res.status(400);
        throw new Error("no token provided");
    }

}))

export default protect;