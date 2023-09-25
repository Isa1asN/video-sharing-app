import express from 'express'
import { createNewVideo, getAllVideos, getMyVideos, getVideoById, likeVideoById } from '../controllers/video.js';
import { verifyUserToken } from '../middleware/auth.middleware.js';

const videoRoutes = express.Router()

videoRoutes.get('/myvideos', verifyUserToken, getMyVideos)
videoRoutes.get('/all', getAllVideos)
videoRoutes.get('/:id', getVideoById)

videoRoutes.post('/create', verifyUserToken, createNewVideo)
videoRoutes.post('/:id/like', verifyUserToken, likeVideoById)

export default videoRoutes;
