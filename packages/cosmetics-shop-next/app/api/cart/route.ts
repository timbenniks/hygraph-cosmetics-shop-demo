import { NextResponse } from 'next/server'

async function getCart(cartId: string) {
  const url = `${process.env.NEXT_CTP_URL}/${process.env.NEXT_CTP_PROJECT}`;
  const response = await fetch(`${url}/carts/${cartId}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_CTP_TOKEN}`
    }
  });
  const result = await response.json()
  return result
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const cart_id = searchParams.get('cart_id')
  const result = await getCart(cart_id as string)
  return NextResponse.json(result)
}