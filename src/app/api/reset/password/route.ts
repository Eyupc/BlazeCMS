import bcrypt from 'bcrypt';
import cnf from '../../../../../cms-config.json';
import DatabaseManager from '../../../../../database/DatabaseManager';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

type Body = {
  username: string;
  password: string;
  rePassword: string;
  token: string;
};
export async function POST(req: NextRequest) {
  const body: Body = await req.json();
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
    return NextResponse.json({ status: true });
  }
  return NextResponse.json({ status: false, errors: errors });
}
