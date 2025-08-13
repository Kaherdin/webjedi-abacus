
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  // For portfolio site, return success for signup
  return NextResponse.json(
    { success: true, message: 'Account created successfully', user: { id: '1', email: 'portfolio@example.com' } },
    { status: 201 }
  );
}
