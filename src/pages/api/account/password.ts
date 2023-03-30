import bcrypt from 'bcrypt';
import DatabaseManager from 'database/DatabaseManager';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

type Body = {
  newPassword: string;
  rePassword: string;
  oldPassword: string;
};
type Response = {
  status: boolean;
  errors?: string[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method != 'POST') return;

  const session = await getSession({ req: req });
  const body: Body = req.body;
  const errors: string[] = [];

  if (!session) {
    res.status(404).json({ status: false });
    return;
  }
  const data = await DatabaseManager.GetInstance().Query(
    `SELECT password FROM users WHERE id = '${session!.user.id}' LIMIT 1`
  );

  const password = (data.data[0].password as string).startsWith('$2y$')
    ? (data.data[0].password as string).replace('$2y$', '$2b$')
    : (data.data[0].password as string);

  if (!data.error) {
    if (!(await bcrypt.compare(body.oldPassword, password))) {
      errors.push('Wrong old password!');
      res.status(200).json({ status: false, errors: errors });
      return;
    }
    if (body.newPassword.length < 6 || body.rePassword.length < 6) {
      errors.push('Password length must be minimum 6 characters!');
      res.status(200).json({ status: false, errors: errors });
      return;
    }
    if (body.newPassword != body.rePassword) {
      errors.push("The 2 passwords doesn't match! (new)");
      res.status(200).json({ status: false, errors: errors });
      return;
    }
    const newPassword = await bcrypt.hash(body.rePassword, 10);
    await DatabaseManager.GetInstance().Query(
      "UPDATE `users` SET `password`='" +
        newPassword +
        "' WHERE `id`=" +
        session.user.id
    );
    res.status(200).json({
      status: true
    });
    return;
  }
  res.status(200).json({
    status: false,
    errors: []
  });
}
