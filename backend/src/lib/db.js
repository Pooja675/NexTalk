import mongoose from "mongoose"

export const connectDB = async () => {

   try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection established...")
    
   } catch (error) {
    console.log("Error in connecting to MongoDb", error)
    process.exit(1) // 1 means failure
   }

}