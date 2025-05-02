// [project]/src/app/api/send-image/route.ts

export async function POST(req: Request) {
  const CH_ID= process.env.NEXT_PUBLIC_CHANEL_ID as string
  if (req.method === 'POST') {
    const { to, imageUrl, previewUrl } = await req.json()

    const response = await fetch('https://api.line.me/v2/bot/message/push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CH_ID}`
      },
      body: JSON.stringify({
        to,
        messages: [
          {
            type: 'image',
            originalContentUrl: imageUrl,
            previewImageUrl: previewUrl
          }
        ]
      })
    })

    const result = await response.json()
    return new Response(JSON.stringify(result), { status: 200 })
  } else {
    return new Response('Method Not Allowed', { status: 405 })
  }
}
