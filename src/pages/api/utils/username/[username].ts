import DatabaseManager from 'database/DatabaseManager';
import { setServers } from 'dns';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession, useSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const username: string = req.query.username!.toString() || '';
  let data = await DatabaseManager.GetInstance().UserQueries.UsernameExist(
    username
  );
  if (data) {
    res.status(200).json({
      exist: true
    });
  } else {
    res.status(200).json({
      exist: false
    });
  }
}
