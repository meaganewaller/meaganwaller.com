export type Subscribers = {
  count: number
  subscribers: ConvertKitSubscriber[]
}

export type ConvertKitSubscriber = {
  id: number
  first_name: string
  email_address: string
  state: 'active' | 'inactive'
  created_at: string
  fields: Record<string, string | null>
}

export type ConvertKitSubscription = {
  subscriber: ConvertKitSubscriber
}
