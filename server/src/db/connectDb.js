import mongoose from "mongoose";

export async function connectDb() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/datastack`);
        console.log("Mongodb connected. host - ", connectionInstance.connection.host);

    } catch (error) {
        console.error("Failed to connect with mongoDB - ", error);
    }
}