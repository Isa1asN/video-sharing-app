import express from 'express'
import { createNewVideo, getAllVideos, getMyVideos, getVideoById } from '../controllers/video.js';
import { verifyUserToken } from '../middleware/auth.middleware.js';

const videoRoutes = express.Router()

videoRoutes.get('/all', verifyUserToken, getAllVideos)
videoRoutes.get('/:id', verifyUserToken, getVideoById)
videoRoutes.get('/myvideos', verifyUserToken, getMyVideos)

videoRoutes.post('/create', verifyUserToken, createNewVideo)

export default videoRoutes;
