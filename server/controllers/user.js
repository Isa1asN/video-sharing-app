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

export const getVideoById = async (req, res) => {
    try {
        // todo implement the GET
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}