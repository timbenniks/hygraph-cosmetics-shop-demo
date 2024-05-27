export async function get(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')

  fetch(process.env.ASTRO_HYGRAPH_ENDPOINT as string, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.ASTRO_HYGRAPH_TOKEN as string}`
    },
    body: JSON.stringify({
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
    })
  })

  return new Response(JSON.stringify({ "message": "Thanks for subscribing" }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}