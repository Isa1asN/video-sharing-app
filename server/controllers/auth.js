import bcrypt from 'bcrypt'
import User from '../models/User.js'


export const signUp = async (req, res) => {
    const existUser = await User.findOne({email : req.body.email})
    if (existUser) return res.status(403).json({error : 'email already exists'});
    const user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPwrd = await bcrypt.hash(user.password, salt);
    user.password = hashedPwrd;
    try {
        await user.save()
        res.status(201).json("Successfully signed up");
    } catch (error) {
        res.status(400).json({error : error});
    }
}
