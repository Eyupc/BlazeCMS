import DatabaseManager from 'database/DatabaseManager';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const data = await DatabaseManager.GetInstance().Query(
    `SELECT id,username,look FROM users WHERE id = '${req.query.id}' LIMIT 1`
  );
  if (!data.error) {
    res.status(200).json({
      status: true,
      username: data.data[0].username,
      look: data.data[0].look
    });
    return;
  }
  res.status(200).json({
    status: false
  });
}
