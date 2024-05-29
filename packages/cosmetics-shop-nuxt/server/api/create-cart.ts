import { H3Event } from 'h3';

async function createCart() {
  const config = useRuntimeConfig();

  const result = await $fetch(`${config.ctpUrl}/${config.ctpProject}/carts`, {
    method: 'POST',
    body: { currency: "EUR" },
    headers: { Authorization: `Bearer ${config.ctpToken}` }
  })

  return result
}

export default eventHandler(async (event: H3Event) => {
  const cart = await createCart()
  return cart
})