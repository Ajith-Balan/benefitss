import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
name:{type:String},
email:{type:String},
password:{type:String},
usercode:{type:String},
invitecode:{type:String},
})

export default mongoose.model.user || mongoose.model("users",userSchema)