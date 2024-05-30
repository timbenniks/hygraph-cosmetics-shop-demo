import { NextResponse } from 'next/server'

async function createCart() {
  const url = `${process.env.NEXT_CTP_URL}/${process.env.NEXT_CTP_PROJECT}`;
  const response = await fetch(`${url}/carts`, {
    method: 'POST',
    body: JSON.stringify({ currency: "EUR" }),
    headers: { Authorization: `Bearer ${process.env.NEXT_CTP_TOKEN}` }
  })

  const result = await response.json()
  return result
}

export async function GET(request: Request) {
  const cart = await createCart()
  return NextResponse.json(cart)
}