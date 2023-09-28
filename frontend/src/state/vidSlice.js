import { createSlice } from "@reduxjs/toolkit";

const vidSlice = createSlice({
    name : 'video',
    initialState : {
        videos : [],
        myVideos : [],
    },
    reducers : {
        setVideos : (state, action) => {
            state.videos = action.payload
        },
        setMyVideos : (state, action) => {
            state.myVideos = action.payload
        }
    },

})

export const {setVideos, setMyVideos} = vidSlice.actions
export default vidSlice.reducer;