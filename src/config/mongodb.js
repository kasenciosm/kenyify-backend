import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log('connection stablished');
        
    })

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "kenyify",
    })
}

export default connectDB;