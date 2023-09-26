import User from '../models/User.js'
import Video from '../models/Video.js'

export const getVideoById = async (req, res) => {
    try {
        const vidId = req.params.id 
        let video = await Video.findById(vidId)
        res.status(200).json(video)
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

export const getAllVideos = async (req, res) => {
        try {
            let vids = await Video.find({})
            res.status(200).json(vids)
            console.log("GET request to get all videos")

        } catch (error) {
            console.log(error)
            res.status(500).send("an error occured")
        }
} 

export const getMyVideos = async (req, res) => {
    try {
        // console.log('req received')
        const userId = req.user._id
        let myvids = await Video.find({userId : userId})
        res.status(200).json(myvids)
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

export const createNewVideo = async (req, res) => {
    try {
        const userId = req.user._id
        // console.log(userId)
        let newVid = new Video({
            userId : userId,
            title : req.body.title,
            description : req.body.description,
            thumbnail : req.body.thumbnail,
            videoUrl : req.body.videoUrl,
            tags : req.body.tags
        })
        await newVid.save()
        res.status(201).send("video creation success")
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

export const likeVideoById = async(req, res) => {
    try {
        const vidId = req.params.id
        const video = await Video.findById(vidId)
        const user = await User.findById(req.user._id)
        video.likes += 1
        user.likedVideos.push(vidId)
        await video.save()
        res.status(200).json(video)
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

export const getLikedVideos = async (req, res) => {
    try {
        const userId = req.user._id

    } catch (error) {
        console.log(error)
    }
}


