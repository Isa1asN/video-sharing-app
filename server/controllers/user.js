import User from "../models/User.js"

export const uploadProfileImg = async(req, res) =>{
    try {               
        const userId = req.user._id
        // console.log("req has arrived")
        let profile = await User.findByIdAndUpdate(userId, {img : req.body.imgUrl}, {new : true}).select('-password')
        res.status(200).send(profile)
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id 
        const user = await User.findById(userId).select('-password -following')
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

export const getMyProfile = async (req, res) => {
    try {
        const userId = req.user._id
        const user = await User.findById(userId).select('-password')
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}