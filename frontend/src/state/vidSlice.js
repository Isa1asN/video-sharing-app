import { createSlice } from "@reduxjs/toolkit";

const vidSlice = createSlice({
    name : 'video',
    initialState : {
        videos : [],
        myVideos : [],
        selectedVideo : null,
    },
    reducers : {
        setVideos : (state, action) => {
            state.videos = action.payload
        },
        setMyVideos : (state, action) => {
            state.myVideos = action.payload
        },
        setSelectedVideo : (state, action) => {
            state.selectedVideo = action.payload
        }
    },

})

export const {setVideos, setMyVideos, setSelectedVideo} = vidSlice.actions
export default vidSlice.reducer;