import mongoose from "mongoose";
export const connectDB=async()=>{//MONGOBD_URL
    try {
        const conn=await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connectes: ${conn.connection.host}`)
        
    } catch (error) {
        console.error(`Error: ${error.message})                                                                                                         rror.message}`)
        process.exit(1); // 1 code mweans a failure , o means success.
        
    }
}

