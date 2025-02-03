import mongoose from "mongoose";

const newsSchama =new mongoose.Schema({
image:{type:String},
title:{type:String}
})
export default mongoose.model.news || mongoose.model("newses",newsSchama)