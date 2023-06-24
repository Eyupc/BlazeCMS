import bcrypt from 'bcrypt';
import DatabaseManager from 'database/DatabaseManager';
import { setup } from 'lib/csrf';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
type Body = {
  newPassword: string;
  rePassword: string;
  oldPassword: string;
};
type Response = {
  status: boolean;
  errors?: string[];
};

const cnf = require(`../../../../languages/${process.env.NEXT_PUBLIC_CMS_LANGUAGE}`);
export default setup(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method != 'POST') return res.status(403).json({ status: false });

  const body: Body = req.body;
  const errors: string[] = [];

  const session = await getToken({
    req: req,
    secret: process.env.SECRET
  });

  if (!session) return res.status(404).json({ status: false });

  const data = await DatabaseManager.GetInstance().Query(
    'SELECT `password` FROM `users` WHERE `id` = ? LIMIT 1',
    [session.user.id]
  );

  const password = (data.data[0].password as string).startsWith('$2y$')
    ? (data.data[0].password as string).replace('$2y$', '$2b$')
    : (data.data[0].password as string);

  if (!data.error) {
    if (!(await bcrypt.compare(body.oldPassword, password))) {
      errors.push(cnf.texts.SETTINGS_ERROR_PASSWORD);
      return res.status(200).json({ status: false, errors: errors });
    }
    if (body.newPassword.length < 6 || body.rePassword.length < 6) {
      errors.push(cnf.texts.SETTINGS_ERROR_PASSWORD_LENGTH);
      return res.status(200).json({ status: false, errors: errors });
    }
    if (body.newPassword != body.rePassword) {
      errors.push(cnf.texts.SETTINGS_ERROR_PASSWORD_MATCH);
      return res.status(200).json({ status: false, errors: errors });
    }
    const newPassword = await bcrypt.hash(body.rePassword, 10);
    await DatabaseManager.GetInstance().Query(
      'UPDATE `users` SET `password`= ? WHERE `id`= ?',
      [newPassword, session.user.id]
    );
    return res.status(200).json({
      status: true
    });
  }
  return res.status(200).json({
    status: false,
    errors: []
  });
});
