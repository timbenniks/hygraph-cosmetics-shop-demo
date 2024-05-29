import { H3Event } from 'h3';

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
  const { cart_id } = getQuery(event);
  return await getCart(cart_id as string)
})