import mongoose from "mongoose";

const Videoschema = new mongoose.Schema(
    {
    userId : {
        type : String,
        required: true,
    },
    title : {
        type : String,
        required: true,
    },
    description : {
        type : String,
        required: true,
    },
    thumbnail : {
        type : String,
        required: true,
    },
    videoUrl : {
        type : String,
        required: true,
    },
    views : {
        type : String,
        default : 0,
    },
    tags : {
        type : [String],
        default : []    
    },
    likes : {
        type : [String],
        default : []    
    },
    },
    {timestamps : true}
)
const Video = mongoose.model('Users', Videoschema)
export default Video;
