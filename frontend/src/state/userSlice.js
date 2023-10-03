import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        user : {},
        following : []
    },
    reducers : {
        setUser : (state, action) => {
            state.user = action.payload
        },
        setFollowing : (state, action) => {
            state.following = action.payload
        }
    }
})
export const {setUser, setFollowing} = userSlice.actions
export default userSlice.reducer