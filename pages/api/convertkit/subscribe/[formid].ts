import type { NextApiRequest, NextApiResponse } from "next"
import { withSentry, init } from '@sentry/nextjs'
import { ConvertKitSubscription } from "@localTypes/schema"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
    denyUrls: ['localhost'],
  })

  const { email, first_name } = req.body
  const formId = req.query.formid as string

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  if (!first_name) {
    return res.status(400).json({ error: 'First name is required' })
  }

  const existingSubscribers = await fetch(
    `https://api.convertkit.com/v3/forms/${formId}/subscriptions?api_secret=${process.env.CONVERTKIT_API_SECRET}`,
    {
      method: 'GET',
    },
  )
  const subscribers = await existingSubscribers.json()

  if (
    subscribers.subscriptions.some(
      (sub:ConvertKitSubscription) => sub.subscriber.email_address === email
    )
  ) {
    return res
      .status(201)
      .json({ error: '', message: `You're already subscribed! ✨`})
  }

  const result = await fetch(
    `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, first_name, api_key: process.env.CONVERTKIT_API_KEY }),
    },
  )

  if (!result.ok) {
    return res.status(500).json({
      error: `Uh oh! Something happened and you couldn't be subscribed.`,
    })
  }

  return res
    .status(201)
    .json({ error: '', message: 'Thank you for subscribing! Check your inbox for a confirmation & a thank you from me! 💙'})
}

export default withSentry(handler)
