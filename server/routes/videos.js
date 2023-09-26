import express from 'express'
import { addToWatchlist, addTohistory, createNewVideo, getAllVideos, getHistory, getLikedVideos, getMyVideos, getVideoById, getWatchlist, likeVideoById } from '../controllers/video.js';
import { verifyUserToken } from '../middleware/auth.middleware.js';

const videoRoutes = express.Router()

videoRoutes.get('/liked', verifyUserToken, getLikedVideos)
videoRoutes.get('/myvideos', verifyUserToken, getMyVideos)
videoRoutes.get('/watchlist', verifyUserToken, getWatchlist)
videoRoutes.get('/history', verifyUserToken, getHistory)
videoRoutes.get('/all', getAllVideos)
videoRoutes.get('/:id', getVideoById)

videoRoutes.post('/create', verifyUserToken, createNewVideo)
videoRoutes.post('/:id/like', verifyUserToken, likeVideoById)
videoRoutes.post('/:id/addwatchlist', verifyUserToken, addToWatchlist)
videoRoutes.post('/:id/addhistory', verifyUserToken, addTohistory)


export default videoRoutes;
