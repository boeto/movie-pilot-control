import { NextResponse } from 'next/server';

import { delay } from '@/utils';

export async function POST(req: Request) {
  const body = await req.json();
  const { amount = 1 } = body;

  await delay(1000);

  return NextResponse.json({ data: amount });
}
