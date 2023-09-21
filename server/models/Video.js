import mongoose from "mongoose";

const Videoschema = new mongoose.Schema(
    {
    name : {
        type : String,
        required: true,
        unique : true
    },
    },
    {timestamps : true}
)
const User = mongoose.model('Users', Videoschema)
export default User;
