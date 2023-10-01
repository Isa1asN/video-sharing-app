import bcrypt from 'bcrypt'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
    // console.log(req.body)
    const existEmail = await User.findOne({email : req.body.email})
    const existName = await User.findOne({name : req.body.name})
    if (existEmail) return res.status(403).json({error : 'Email already exists'});
    if (existName) return res.status(403).json({error : 'Name already exists'});
    const user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPwrd = await bcrypt.hash(user.password, salt);
    user.password = hashedPwrd;
    try {
        await user.save()
        res.status(201).json("User successfully signed up");
    } catch (error) {
        res.status(500).json({error : error});
    }
}

export const signIn = async (req, res) => {
    try {
        // console.log(req.body.email)
        const user = await User.findOne({email : req.body.email});
        if (!user) return res.status(404).json({error : "email does not exist"});
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) return res.status(400).json({error : "Incorrect credentials"});
    
        const payload = {_id : user._id, email: user.email}
        const token = jwt.sign(payload, process.env.jwtSecret, {expiresIn : "24h"});
        res.cookie("token", token, {httpOnly : true, secure : true});
        res["token"] = token;
        res.status(200).json({token : token, user : {_id : user._id,
                                                     name : user.name,
                                                     email : user.email}})
        console.log("A user signed in")                                                     
    } catch (error) {
        res.status(500).json({error : "couldn't sign in"});
    }
}


export const signout = async (req, res) => {
    res.clearCookie("token")
    return res.status(200).json({message : "Signed out successfully"});
}