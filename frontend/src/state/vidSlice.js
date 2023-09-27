import { createSlice } from "@reduxjs/toolkit";

const vidSlice = createSlice({
    name : 'videos',
    initialState : {
        videos : null,
    },
    reducers : {
        setVideos : (state, action) => {
            state.videos = action.payload
        }
    },

})

export const {setVideos} = vidSlice.actions
export default vidSlice.reducer;