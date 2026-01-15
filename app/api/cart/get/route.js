import connectDB from "@/config/database"
import User from "@/models/User"
import { NextResponse } from "next/server"

export async function GET(requst) {

    try {
        const { userId } = getAuth(requst)

        connectDB()
        const user = await User.findById(userId)

        const { cartItems } = user

        return NextResponse.json({ success: true, cartItems })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }
}