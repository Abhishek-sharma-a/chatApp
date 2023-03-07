import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import UserModal from "../models/user.js"
const secret="test"


export const signup =  async(req,res)=>{
    const {email, password,firstName,lastName}=req.body
    try{
        const oldUser=await UserModal.findOne({email})
        if(oldUser){
            return res.status(400).json({message:"User already exsist"})
        }
        const hashedPassword = await bcrypt.hash(password,12)

        const result= await UserModal.create({
            email,
            password:hashedPassword,
            name:`${firstName} ${lastName}`
        })
        const token= jwt.sign({email:result.email, id:result._id},secret,{expiresIn:"1h"})
        res.status(201).json({result,token})
    }
    catch(error){
        return res.status(500).json({message:"something went wrong"})
        console.log(error);

    }
}