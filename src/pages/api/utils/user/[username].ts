import DatabaseManager from 'database/DatabaseManager';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const data = await DatabaseManager.GetInstance().Query(
    'SELECT `look`, `motto`, `rank`, `online` FROM `users` WHERE `username` = ? LIMIT 1',
    [req.query.username]
  );
  if (!data.error) {
    res.status(200).json({
      status: true,
      username: req.query.username,
      look: data.data[0].look,
      motto: data.data[0].motto,
      rank: data.data[0].rank,
      online: data.data[0].online
    });
    return;
  }
  res.status(200).json({
    status: false
  });
}
