import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
    email:{type:String},
    password:{type:String},
    username:{type:String},
    role:{type:String}

})

export default mongoose.model.admin || mongoose.model("admins",adminSchema)