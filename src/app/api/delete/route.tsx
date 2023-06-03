import { NextResponse } from 'next/server';

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);  
    const id = searchParams.get('id');

    const res = await fetch(`${process.env.API_BASE}/notes/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'DELETE'
    });
    
    const response = await res.json()
    
    return NextResponse.json(response)
}