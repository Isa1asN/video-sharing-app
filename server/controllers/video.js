import User from '../models/User.js'
import Video from '../models/Video.js'

export const test = (req, res) =>{
    console.log("Test is working ")
    res.send("The test is working")
}

export const getAllVideos = async (req, res) => {
        try {
            let vids = await Video.find({})
            req.status(200).json(vids)
            console.log("GET request to get all videos")

        } catch (error) {
            console.log(error)
            res.status(500).send("an error occured")
        }
}

export const getMyVideos = async (req, res) => {
    try {
        const userId = req.user.id
        let myvids = await Video.find({userId : userId})
        res.status(200).json(myvids)
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}
