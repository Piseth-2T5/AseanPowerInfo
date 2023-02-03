import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Admin from '../models/admin.js';


export const signin= async (req,res) => {
    const {email, password} = req.body;
    try {
        const admin = await Admin.findOne({email});
        if(!admin) return res.status(404).json({message: "Not signed up yet."})
        const correctPassword = await bcrypt.compare(password, admin.password)
        if(!correctPassword) return res.status(400).json({message: "Wrong password"});
        const token = jwt.sign({email: admin.email, id: admin._id}, 'secret-word', {expiresIn: "4h"});
        res.status(200).json({result: admin, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong."})
    }
}

export const signup = async (req, res) =>{
    const {email, password, compassword} = req.body;
    try {
        const admin = await Admin.findOne({email});
        if(admin) return res.status(404).json({message: "This account already exist."});
        if(password !== compassword ) return res.status(400).json({message: "Password not match."});
        const hashPassword = await bcrypt.hash(password, 12);
        const result = await Admin.create({email, password: hashPassword});
        const token = jwt.sign({email: result.email, password: result.password}, 'secret-word', {expiresIn: "1h"});
        res.status(200).json({result, token})
    } catch (error) {
        res.status(500).json({message: "Something went wrong."})
    }
}


