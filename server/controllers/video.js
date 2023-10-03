import User from '../models/User.js'
import Video from '../models/Video.js'
import mongoose from 'mongoose'

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
        res.status(201).json(newVid)
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

export const likeVideoById = async(req, res) => {
    try {
        const vidId = req.params.id
        const video = await Video.findOneAndUpdate({_id : vidId}, {$inc : {likes : 1}}, {new : true})
        const user = await User.findOneAndUpdate({_id : req.user._id}, {$push : {likedVideos : vidId}})
        res.status(200).json(video)
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

export const getLikedVideos = async (req, res) => {
    try {
        const userId = req.user._id
        const user = await User.findById(userId)
        const liked_list = user.likedVideos
        const likedVids = await Promise.all(liked_list.map(async (vidId) => {
            const vid = await Video.findById(vidId)
            return vid
        }))
        res.status(200).json(likedVids)

    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

export const getWatchlist = async (req, res) => {
    try {
        const userId = req.user._id
        const user = await User.findById(userId)
        const watch = user.watchList
        const watchedVids = await Promise.all(watch.map(async (vidId) => {
            const vid = await Video.findById(vidId)
            return vid
        }))
        res.status(200).json(watchedVids)
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

export const getHistory = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        const hist = user.history
        if (hist.length === 0){
            return res.status(204).send("No history has been found")
        }
        const history = await Promise.all(hist.map(async (vidId) => {
            const vid = await Video.findById(vidId)
            return vid
        }))
        res.status(200).json(history)
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

export const addToWatchlist = async (req, res) => {
    try {
        const vidId = req.params.id
        const user = await User.findById(req.user._id)
        user.watchList.push(vidId)
        await user.save()
        res.status(200).send("Added to watch list")
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

export const addTohistory = async (req, res) => {
    try {
        const vidId = req.params.id
        const user = await User.findById(req.user._id)
        user.history.push(vidId)
        await user.save()
        
        res.status(200).send("Added to history")
    } catch (error) {
        console.log(error)
        res.status(500).send("An error occured")
    }
}

