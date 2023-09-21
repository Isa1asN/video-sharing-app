import mongoose from "mongoose";

const Userschema = new mongoose.Schema(
    {
    name : {
        type : String,
        required: true,
        unique : true
    },
    email : {
        type : String,
        required: true,
        unique : true
    },
    password : {
        type : String,
        required: true,
    },
    img : {type : String},
    followers : {
        type : Number,
        default : 0
    },
    following : {
        type : [String]
    },
    timestamps : true
}
)
const User = mongoose.model('Users', Userschema)
export default User;