import DatabaseManager from 'database/DatabaseManager';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const session = await getSession({ req: req });
  if (!session) {
    res.status(200).json({ status: false });
    return;
  }
  const data = await DatabaseManager.GetInstance().Query(
    'SELECT `id`,`username`,`look` FROM `users` WHERE `id` = ? LIMIT 1',
    [session.user.id]
  );
  if (!data.error) {
    res.status(200).json({
      status: true,
      username: data.data[0].username,
      avatar: data.data[0].look
    });
    return;
  }
  res.status(200).json({
    status: false
  });
}
