import { createSlice } from "@reduxjs/toolkit";

const vidSlice = createSlice({
    name : 'video',
    initialState : {
        videos : [],
        myVideos : [],
        history : [],
        isHistory : true
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
            state.history.push(action.payload)
        },
        setIsHistory : (state, action ) => {
            state.isHistory = action.payload
        }
    },

})

export const {setVideos, setMyVideos, addNewVideo, setHistory} = vidSlice.actions
export default vidSlice.reducer;