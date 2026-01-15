import connectDB from "@/config/database";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(requst) {

    try {
        const { userId } = getAuth(requst)

        const { cartData} = await request.json()

        await connectDB()

        const user =await User.findById(userId)

        user.cartItems= cartData
        user.save()

        return NextResponse.json({ success: true, message: "Cart updated successfully" })
    } catch (error) {
        return NextResponse.json({success:false, message: error.message})
    }
}