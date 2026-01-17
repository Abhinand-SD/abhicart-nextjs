import connectDB from "@/config/database"
import Address from "@/models/address"
import { getAuth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        const {userId} = getAuth(request)

        const {address} = await request.json()
        console.log(address);
        

        await connectDB()
        await Address.create({...address, userId})
        return NextResponse.json({success:true, message:"Address added successfully"})
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({success:false, message:error.message})
    }
    
}