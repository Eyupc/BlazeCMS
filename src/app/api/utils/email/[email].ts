import DatabaseManager from 'database/DatabaseManager';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  const email: string = req.query.email!.toString() || '';
  const data = await DatabaseManager.GetInstance().UserQueries.MailExist(email);
  if (data) {
    res.status(200).json({
      exist: true
    });
    return;
  }
  res.status(200).json({
    exist: false
  });
}
