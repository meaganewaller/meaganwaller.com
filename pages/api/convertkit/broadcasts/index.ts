import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Broadcast } from '@localTypes/subscribers';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      if (!process.env.CONVERTKIT_API_SECRET) {
        throw new Error('ConvertKit API secret not found');
      }

      const broadcastsRes = await axios.get(`https://api.convertkit.com/v3/broadcasts?api_secret=${process.env.CONVERTKIT_API_SECRET}`);

      const broadcasts: Broadcast[] = [];
      (broadcastsRes.data?.broadcasts as any[]).forEach((broadcast) => {
        debugger;
        broadcasts.push({
          id: broadcast.id,
          subject: broadcast.subject,
          created_at: broadcast.created_at,
        });
      });

      return res.status(200).json({
        message: 'Success',
        data: {
          broadcasts: broadcasts,
        },
        code: res.statusCode,
      });
    } catch {
      return res.status(500).json({ message: 'Internal Server Error', code: res.statusCode });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed', code: res.statusCode });
}
