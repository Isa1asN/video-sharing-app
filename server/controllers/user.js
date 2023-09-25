import User from "../models/User.js"

export const uploadProfileImg = async(req, res) =>{
    try {
        const userId = req.user._id
        let profile = User.findByIdAndUpdate(userId, {imgUrl : req.body.imgUrl})
        res.status(200).json(profile)
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