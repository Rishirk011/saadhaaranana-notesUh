import mongoose from "mongoose";

const connectDb = async () => {
    await mongoose.connect(process.env.API_URL)
    .then(()=>{
        console.log("DB connected successfully");
    })
    .catch(()=>{
        console.log("failed to connect");
    })
}

export default connectDb;