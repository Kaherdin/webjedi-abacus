
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  // For a portfolio site, redirect to home page
  return NextResponse.redirect(new URL('/', request.url), 302);
}
