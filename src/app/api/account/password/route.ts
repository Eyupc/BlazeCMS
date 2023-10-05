import bcrypt from 'bcrypt';
import cnf from '../../../../../cms-config.json';
import DatabaseManager from '../../../../../database/DatabaseManager';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

type Body = {
  newPassword: string;
  rePassword: string;
  oldPassword: string;
};
type Response = {
  status: boolean;
  errors?: string[];
};
export async function POST(req: NextRequest) {
  const body: Body = await req.json();
  const errors: string[] = [];

  const session = await getToken({
    req: req,
    secret: process.env.SECRET
  });

  if (!session) return NextResponse.json({ status: false }, { status: 404 });

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
      return NextResponse.json({ status: false, errors: errors });
    }
    if (body.newPassword.length < 6 || body.rePassword.length < 6) {
      errors.push(cnf.texts.SETTINGS_ERROR_PASSWORD_LENGTH);
      return NextResponse.json({ status: false, errors: errors });
    }
    if (body.newPassword != body.rePassword) {
      errors.push(cnf.texts.SETTINGS_ERROR_PASSWORD_MATCH);
      return NextResponse.json({ status: false, errors: errors });
    }
    const newPassword = await bcrypt.hash(body.rePassword, 10);
    await DatabaseManager.GetInstance().Query(
      'UPDATE `users` SET `password`= ? WHERE `id`= ?',
      [newPassword, session.user.id]
    );
    return NextResponse.json({
      status: true
    });
  }
  return NextResponse.json({
    status: false,
    errors: []
  });
}
