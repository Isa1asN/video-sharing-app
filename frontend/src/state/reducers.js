import { combineReducers } from "@reduxjs/toolkit";
import vidReducer from './vidSlice'
import userReducer from './userSlice'

const rootReducer = combineReducers({
    video : vidReducer,
    user : userReducer,
})



export default rootReducer;