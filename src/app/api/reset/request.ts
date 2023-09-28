import DatabaseManager from 'database/DatabaseManager';
import { VerifyCaptcha } from 'lib/captcha';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SMTPServer } from 'SMTPServer/SMTPServer';

type NextBody = {
  username: string;
  email: string;
  captcha: string;
};
async function handler(req: NextApiRequest, res: NextApiResponse<{}>) {
  if (req.method != 'POST') return res.status(403).json({ status: false });
  const body: NextBody = req.body;

  const captchaResult = await VerifyCaptcha(body.captcha);

  if (!captchaResult)
    return res.status(403).send({ error: 'Google recaptcha error' });

  if (
    await DatabaseManager.GetInstance().UserQueries.CheckUsernameMail(
      body.username,
      body.email
    )
  ) {
    await SMTPServer.GetInstance().sendResetMail(body.email, body.username);
    return res.status(200).json({ status: true });
  }
  return res.status(200).json({ status: false });
}
