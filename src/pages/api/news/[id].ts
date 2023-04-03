import DatabaseManager from 'database/DatabaseManager';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const news = await DatabaseManager.GetInstance().NewsQueries.getNews(
    Number(req.query.id)
  );

  if (!news.status)
    res.status(200).json({
      status: false
    });
  else
    res.status(200).json({
      status: true,
      news: news.news
    });
}
