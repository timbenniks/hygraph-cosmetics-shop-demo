import { NextResponse } from 'next/server'

async function addLineItem(cartId: string, productId: string, cartVersion: number) {

  const url = `${process.env.NEXT_CTP_URL}/${process.env.NEXT_CTP_PROJECT}`;

  const response = await fetch(`${url}/carts/${cartId}`, {
    method: 'POST',
    body: JSON.stringify({
      "version": cartVersion,
      "actions": [{
        "action": "addLineItem",
        "productId": productId,
        "variantId": 1,
        "quantity": 1,
      }]
    }),
    headers: {
      Authorization: `Bearer ${process.env.NEXT_CTP_TOKEN}`
    }
  });

  const result = await response.json();

  return result
}

async function getCart(cartId: string) {
  const url = `${process.env.NEXT_CTP_URL}/${process.env.NEXT_CTP_PROJECT}`;

  const response = await fetch(`${url}/carts/${cartId}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_CTP_TOKEN}`
    }
  });

  const result = await response.json();

  return result
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const product_id = searchParams.get('product_id')
  const cart_id = searchParams.get('cart_id')
  const currentCart = await getCart(cart_id as string)
  const result = await addLineItem(cart_id as string, product_id as string, currentCart.version)
  return NextResponse.json(result)
}