import { NextResponse,NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const protectedRoutes = ['/dashboard'];
    const token = req.cookies.get('accessToken')?.value;
    console.log({ token });
    const { pathname } = req.nextUrl;

    if (
        protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route)) &&
        !token
      ) {
        return NextResponse.redirect(new URL("/auth", req.url));
      }
      return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path"]
};