import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        user : {},
        following : [],
        profile : {},
        likedVideos : [],
    },
    reducers : {
        setUser : (state, action) => {
            state.user = action.payload
        },
        setFollowing : (state, action) => {
            state.following = action.payload
        },
        setProfile : (state, action) => {
            state.profile = action.payload
        },
        setLike: (state, action) => {
            const index = state.likedVideos.indexOf(action.payload);
            if (index !== -1) {
                state.likedVideos.splice(index, 1); 
            } else {
                state.likedVideos.push(action.payload);
            }
        }

    }
})
export const {setUser, setFollowing, setProfile, setLike} = userSlice.actions
export default userSlice.reducer