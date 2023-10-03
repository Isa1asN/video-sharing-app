import { createSlice } from "@reduxjs/toolkit";

const vidSlice = createSlice({
    name : 'video',
    initialState : {
        videos : [],
        myVideos : [],
        history : [],
        watchlist : [],
    },
    reducers : {
        setVideos : (state, action) => {
            state.videos = action.payload
        },
        setMyVideos : (state, action) => {
            state.myVideos = action.payload
        },
        addNewVideo : (state, action) => {
            state.myVideos.push(action.payload)
        },
        setHistory : (state, action) => {
            state.history = action.payload
        },
        setWatchList : (state, action) => {
            state.watchlist = action.payload
        }
    },

})

export const {setVideos, setMyVideos, addNewVideo, setHistory, setWatchList} = vidSlice.actions
export default vidSlice.reducer;