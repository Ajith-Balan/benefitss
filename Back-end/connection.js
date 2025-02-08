import mongoose from "mongoose";

export default async function connection(){
   const URL=process.env.dburl
   console.log(URL);

   const db=await mongoose.connect(URL)
   console.log("Database Connected");
   return db
   
   
}
