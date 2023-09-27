import { combineReducers } from "@reduxjs/toolkit";
import vidReducer from './vidSlice'

const rootReducer = combineReducers({
    video : vidReducer,
})



export default rootReducer;