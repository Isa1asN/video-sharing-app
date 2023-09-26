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

export const followUserById = async (req, res) => {
    try {
        const followerId = req.user._id
        const followedId = req.params.id
        const followedUser = await User.findById(followedId)
        const followerUser = await User.findById(followerId)
        followedUser.followers += 1
        followerUser.following.push(followedId)
        await followedUser.save()
        await followerUser.save()
        res.status(200).json(followedUser)
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

export const getFollowingUsers = async (req, res) => {
    try {
        const userId = req.user._id
        const user = await User.findById(userId)
        const follow_list = user.following 
        const following_users = await Promise.all(follow_list.map(async (userId) => {
            const user = await User.findById(userId).select('name email followers img')
            return user
        }))
        res.status(200).json(following_users)


    } catch (error) {
        console.log(error)
    }
}
