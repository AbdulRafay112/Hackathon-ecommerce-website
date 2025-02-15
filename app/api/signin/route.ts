import { NextRequest , NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/db";
import User from "@/app/models/User";
import bcrytp from "bcryptjs"
export async function POST (request:NextRequest){
    try{
        const {email , password} = await request.json();
        if(!email || !password)
            return NextResponse.json({error:"email and password required"} , {status:400})
        connectToDatabase();
        const existingUser = await User.findOne({email});
        if(!existingUser)
            return NextResponse.json({message:"account not found for this email" , email} , {status:400})
        const isPasswordValid = await bcrytp.compare(password , existingUser.password) 
        if(!isPasswordValid)
            return NextResponse.json({message:"password is incorrect"} , {status:400})
        return NextResponse.json({status:true,message:"login successfully", user:{email:existingUser.email, id:existingUser.id, name:existingUser.name}},{status:200})
    }
    catch(error){
        return NextResponse.json({error:"login in failed"} , {status:400})
    }
}