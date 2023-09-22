import bcrypt from 'bcrypt'
import User from '../models/User.js'


export const signUp = async (req, res) => {
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
