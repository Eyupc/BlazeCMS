import axios from 'axios';
import DatabaseManager from 'database/DatabaseManager';
import { csrf } from 'lib/captcha';
import type { NextApiRequest, NextApiResponse } from 'next';
import { SMTPServer } from 'SMTPServer/SMTPServer';
type NextBody = {
  username: string;
  email: string;
  captcha: string;
};

export default csrf(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  let captcha: null | string = null;
  if (req.method != 'POST') return res.status(200).json({ status: false });
  const body: NextBody = req.body;

  try {
    // Ping the google recaptcha verify API to verify the captcha code you received
    captcha = await axios(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_SECRET_RECAPTCHA_SITE_KEY}&response=${body.captcha}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        method: 'POST'
      }
    )
      .then((resp) => resp.data.success)
      .catch((err) => null);
  } catch (e) {
    return res.status(403).send({ error: 'Google recaptcha error' });
  }

  if (captcha == null || !captcha)
    return res.status(403).send({ error: 'Google recaptcha error' });
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
});
