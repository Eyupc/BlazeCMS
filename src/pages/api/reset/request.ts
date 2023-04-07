import DatabaseManager from 'database/DatabaseManager';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SMTPServer } from 'SMTPServer/SMTPServer';

type NextBody = {
  username: string;
  email: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  if (req.method != 'POST') return res.status(200).json({ status: false });

  const body: NextBody = req.body;
  if (
    await DatabaseManager.GetInstance().UserQueries.CheckUsernameMail(
      body.username,
      body.email
    )
  ) {
    await SMTPServer.GetInstance().sendResetMail(
      'eyuptrabzonn@gmail.com',
      body.username
    );
    return res.status(200).json({ status: true });
  }
  return res.status(200).json({ status: false });
}
