import connectDB from "@/config/database";
import authSeller from "@/lib/authSeller";
import Product from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(requst) {
    try {
        const { userId } = getAuth(requst)

        const isSeller = authSeller(userId)

        if(!isSeller) {
            return NextResponse.json({success: false, message: 'not authorized'})
        }

        await connectDB()

        const products = await Product.find({})
        return NextResponse.json({ success: true, products})
    } catch (error) {
        return NextResponse.json({success:false, message: error.message})
    }
    
}