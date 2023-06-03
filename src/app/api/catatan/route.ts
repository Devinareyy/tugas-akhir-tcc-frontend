import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {
  const body = await request.json()
  const res = await fetch(`${process.env.API_BASE}/notes`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    method: 'POST'
  });

  const response = await res.json()
 
  return NextResponse.json(response)
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);  
  const id = searchParams.get('id');

  const res = await fetch(`${process.env.API_BASE}/notes/${id}`, {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      method: 'GET'
  });
  
  const response = await res.json()
  
  return NextResponse.json(response)
}