import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        user : {},
        following : [],
        profile : ''
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
        }
    }
})
export const {setUser, setFollowing, setProfile} = userSlice.actions
export default userSlice.reducer