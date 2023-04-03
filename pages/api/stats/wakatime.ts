import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Cache-Control", "max-age=0, s-maxage=86400");
  if (req.method === "GET") {
    try {
      if (!process.env.WAKATIME_API_KEY) {
        throw new Error("Wakatime API key not found");
      }

      const wakatimeRes = await axios.get(
        "https://wakatime.com/api/v1/users/current/stats/last_7_days",
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              process.env.WAKATIME_API_KEY
            ).toString("base64")}`,
          },
        }
      );

      const languages: WakaTimeLanguage[] = [];
      (wakatimeRes.data.data.languages as any[])
        .slice(0, 5)
        .forEach((language) => {
          languages.push({
            name: language.name,
            time: language.text,
            percent: language.percent,
          });
        });

      return res.status(200).json({
        message: "Success",
        data: {
          total:
            wakatimeRes.data.data.human_readable_total_including_other_language,
          dailyAverage:
            wakatimeRes.data.data
              .human_readable_daily_average_including_other_language,
          languages: languages,
        },
        code: res.statusCode,
      });
    } catch {
      return res
        .status(500)
        .json({ message: "Internal Server Error", code: res.statusCode });
    }
  }

  return res
    .status(405)
    .json({ message: "Method Not Allowed", code: res.statusCode });
}
