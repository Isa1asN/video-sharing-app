import User from "../models/User.js"

export const uploadProfileImg = async(req, res) =>{
    try {
        const userId = req.user._id
        let profile = User.findById(userId)
        profile.img = req.body.imgUrl
        await profile.save()
        res.status(200).send("Profile image added successfully")
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