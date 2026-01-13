import connectDB from "@/config/database"
import User from "@/models/User"
import { getAuth, clerkClient } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function GET(request) {
    try {
        const { userId } = getAuth(request)

        if (!userId) {
            return NextResponse.json({ success: false, message: "Not Authorized" })
        }

        await connectDB()
        let user = await User.findById(userId)

        if (!user) {
            const client = await clerkClient()
            const clerkUser = await client.users.getUser(userId)

            user = await User.create({
                _id: userId,
                name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || 'User',
                email: clerkUser.emailAddresses[0].emailAddress,
                imageUrl: clerkUser.imageUrl,
                cartItems: {}
            })
        }

        return NextResponse.json({ success: true, user })
    } catch (error) {
        console.error(error.message)
        return NextResponse.json({ success: false, message: error.message })
    }
}