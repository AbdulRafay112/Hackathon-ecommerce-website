import { NextResponse, NextRequest } from 'next/server'
import * as jose from 'jose'
 
export async function middleware(request: NextRequest) {
  try{
        const token = await request.cookies.get("token")

        if(!token)
            return NextResponse.redirect(new URL('/signin', request.url))

        const secret = new TextEncoder().encode(process.env.SECRET)
        const jwt = token
        
        const { payload } = await jose.jwtVerify(jwt.value, secret, {})

        if(!payload)
          return NextResponse.redirect(new URL('/signin', request.url))
    }
    catch(error)
    {
      if(error.code=="ERR_JWT_EXPIRED")
          console.error('Token has expired.');
      else
          console.error('Token verification failed:', error.message);
      return NextResponse.redirect(new URL('/signin', request.url));
      
    }
}
 
export const config = {
  matcher: ['/dashboard/:path*'],
}