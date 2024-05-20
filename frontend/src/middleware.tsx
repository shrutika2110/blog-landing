import { NextResponse, userAgent } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const { device } = userAgent(request);
  const viewport = (device.type === 'mobile' || device.type === 'tablet') ? 'mobile' : 'desktop';
  requestHeaders.set('viewport', viewport);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  return response;
}