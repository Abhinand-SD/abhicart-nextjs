import mongoose from "mongoose";

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {

    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        if (!process.env.MONGODB_URI) {
            console.error("MONGODB_URI is not defined in environment variables");
            throw new Error("MONGODB_URI is not defined");
        }

        const opts = {
            bufferCommands: false,
            dbName: 'quickcart'
        }

        cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then(mongoose => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default connectDB