import { H3Event } from 'h3';

async function addLineItem(cartId: string, productId: string, cartVersion: number) {
  const config = useRuntimeConfig();

  const result = await $fetch(`${config.ctpUrl}/${config.ctpProject}/carts/${cartId}`, {
    method: 'POST',
    body: {
      "version": cartVersion,
      "actions": [{
        "action": "addLineItem",
        "productId": productId,
        "variantId": 1,
        "quantity": 1,
      }]
    },
    headers: {
      Authorization: `Bearer ${config.ctpToken}`
    }
  }).catch((err) => console.log(err.data));

  return result
}

async function getCart(cartId: string) {
  const config = useRuntimeConfig();

  const result = await $fetch(`${config.ctpUrl}/${config.ctpProject}/carts/${cartId}`, {
    headers: {
      Authorization: `Bearer ${config.ctpToken}`
    }
  }).catch((err) => console.log(err.data));

  return result
}

export default eventHandler(async (event: H3Event) => {
  const { product_id, cart_id } = getQuery(event);
  const currentCart = await getCart(cart_id as string)
  return await addLineItem(cart_id as string, product_id as string, currentCart.version)
})