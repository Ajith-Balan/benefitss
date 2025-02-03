import mongoose from "mongoose";

const countrySchema=new mongoose.Schema({
    Country:{type:String},
    photo:{type:String},
    Workvisa:{type:String},
    Visitvisa:{type:String},
    Studyvisa:{type:String},
    Heading:{type:String},
    Paragraph:{type:String},
    About:{type:String},
})

export default mongoose.model.country || mongoose.model("countries",countrySchema)