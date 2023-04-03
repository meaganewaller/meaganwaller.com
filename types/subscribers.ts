export type Subscribers = {
  count: number;
  subscribers: ConvertKitSubscriber[];
};

export type ConvertKitSubscriber = {
  id: number;
  first_name: string;
  email_address: string;
  state: 'active' | 'inactive';
  created_at: string;
  fields: Record<string, string | null>;
};

export type ConvertKitSubscription = {
  subscriber: ConvertKitSubscriber;
};

export type ConvertKitBroadcast = {
  id: number;
  created_at: string;
  subject: string;
  description: string;
  content: string;
  public: boolean;
  published_at?: string;
  send_at?: string;
  thumbnail_alt?: string;
  thumbnail_url?: string;
};

export type Broadcast = {
  id: number;
  subject: string;
  created_at: string;
};

export type Broadcasts = {
  broadcasts: Broadcast[];
};
