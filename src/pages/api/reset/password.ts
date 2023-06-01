import bcrypt from 'bcrypt';
import DatabaseManager from 'database/DatabaseManager';
import jwt from 'jsonwebtoken';
import cnf from 'lang/en.json';
import { csrf } from 'lib/csrf';
import type { NextApiRequest, NextApiResponse } from 'next';
type Body = {
  username: string;
  password: string;
  rePassword: string;
  token: string;
};
export default csrf(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  if (req.method != 'POST') return res.status(403).json({ status: false });

  const body: Body = req.body;
  const errors: string[] = [];
  let tokenValid: boolean = false;
  jwt.verify(body.token, process.env.NEXTAUTH_SECRET, (err, result) => {
    if (err == null) tokenValid = true;
  });

  if (body.password.length < 6) {
    errors.push(cnf.texts.RESET_ERROR_PASSWORD_LENGTH);
  }
  if (body.password != body.rePassword) {
    errors.push(cnf.texts.RESET_ERROR_PASSWORD_MATCH);
  }

  if (tokenValid && errors.length == 0) {
    const hashedPass = await bcrypt.hash(body.password, 10);
    await DatabaseManager.GetInstance().UserQueries.UpdatePassword(
      body.username,
      hashedPass
    );
    return res.status(200).json({ status: true });
  }
  return res.status(200).json({ status: false, errors: errors });
});
