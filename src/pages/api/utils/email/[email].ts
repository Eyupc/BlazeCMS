import DatabaseManager from 'database/DatabaseManager';
import { setServers } from 'dns';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession, useSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const email: string = req.query.email!.toString() || '';
  let data = await DatabaseManager.GetInstance().UserQueries.MailExist(email);
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
