import DatabaseManager from 'database/DatabaseManager';
import { setServers } from 'dns';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession, useSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  let data = await DatabaseManager.GetInstance().Query(
    `SELECT look FROM users WHERE username = '${req.query.username}' LIMIT 1`
  );
  if (!data.error) {
    res.status(200).json({
      status: true,
      username: req.query.username,
      look: data.data[0].look
    });
  } else {
    res.status(200).json({
      status: false
    });
  }
}
