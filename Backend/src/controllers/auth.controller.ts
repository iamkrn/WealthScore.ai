import User from "../models/User.model";
import { Request,Response } from "express";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken";

//login
export const register = async(req:Request, res:Response): Promise<void> => {

try {
        const {name, email, password, phone} = req.body
           
        // checking if fields
        if(!name || !email || !password ){
             res.status(400).json({message: "please required fields"})
        }

        // checking existing user
        const existingUser =  await User.findOne({email})
        if(existingUser){
            res.status(400).json({message: "user already exist"})
        }

        const user = await User.create({
            name,
            password,
            email,
            phone
        });

        // token generation
        const token =  generateToken(user._id.toString())

        // response

        res.status(201).json({
            message:"Registration successfull",
            token,
                user:{
                   id:user._id,
                   name:user.name,
                   phone: user.phone,
                   email:user.email
                },
            
        })
    
} catch (error) {
    res.status(500).json({message:"server error",error})
    
}    
}

export const login = async( req:Request,res:Response): Promise<void> => {
    try {
        const {email , password} = req.body;
    
        if(!email || !password){
            res.status(400).json({message: "please fill the required fields"})
        }
    
        // find user include password
        const user = await User.findOne({email}).select("+password")
        if(!user){
            res.status(400).json({message:"Invalid email or password"})
            return
        }
    
        // password compare
        const isMatch = await bcrypt.compare(password,user.password as string);
        if(!isMatch){
            res.status(400).json({message:"Invalid email or password"})
    
        }
        const token =  generateToken(user._id.toString())
    
            // response
    
            res.status(201).json({
                message:"Login successfull",
                token,
                    user:{
                       id:user._id,
                       name:user.name,
                       phone: user.phone,
                       email:user.email
                    },
                })
       } catch (error) {
            res.status(500).json({message:"server error",error})
}
}