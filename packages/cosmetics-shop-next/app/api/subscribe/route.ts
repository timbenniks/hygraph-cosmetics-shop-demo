import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')

  fetch(process.env.NEXT_HYGRAPH_ENDPOINT as string, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_HYGRAPH_TOKEN as string}`
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

  return NextResponse.json({ "message": "Thanks for subscribing" })
}