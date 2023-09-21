import mongoose from "mongoose";

const Commentschema = new mongoose.Schema(
    {
    userId : {
        type : String,
        required: true,
    },
    videoId : {
        type : String,
        required: true,
    },
    description : {
        type : String,
        required: true,
    },
 
    },
    {timestamps : true}
)
const Video = mongoose.model('Users', Commentschema)
export default Video;
