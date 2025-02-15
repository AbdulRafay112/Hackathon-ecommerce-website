import { NextRequest , NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/db";
import User from "@/app/models/User";
export async function POST(request:NextRequest){
    try{
        const {email , password} = await request.json()
        if(!email || !password)
            return NextResponse.json({error:"email or password required"} , {status:400})
        await connectToDatabase()
        const existingUser = await User.findOne({email})
        if(existingUser)
            return NextResponse.json({message:"user already exist"} , {status:400})
        await User.create({email , password})
        return NextResponse.json({message:"user registered successfully"} , {status:200})
    }
    catch(error){
        return NextResponse.json({error:"sign up failed"},{status:400})

    }

}