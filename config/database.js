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
        const opts = {
            bufferCommands: false,
            dbName: 'quickcart'
        }
        console.log("Database connecting...")
        cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then(mongoose => {
            console.log("Database connected")
            return mongoose
        })
    }
    console.log("Database connecting...")
    cached.conn = await cached.promise
    console.log("Database connected")
    return cached.conn
}

export default connectDB