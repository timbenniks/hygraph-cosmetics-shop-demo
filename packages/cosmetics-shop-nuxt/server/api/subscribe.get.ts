export default defineEventHandler(async (event) => {
  const { email } = await getQuery(event)

  const config = useRuntimeConfig(event)

  $fetch(config.hygraphEndpoint, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.hygraphToken}`
    },
    body: {
      query: `
        mutation CreateSubscriber($email: String!) {
          createNewsletterSubscriber(data: { email: $email }) {
            id
            email
          }
        }
      `,
      variables: {
        email
      }
    }
  })

  return { message: 'Thanks for subscribing' }
})