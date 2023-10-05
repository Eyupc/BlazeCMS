import DatabaseManager from '../../../../../database/DatabaseManager';
import { VerifyCaptcha } from '../../../../../lib/captcha';
import { SMTPServer } from '../../../../../SMTPServer/SMTPServer';
import { NextRequest, NextResponse } from 'next/server';

type NextBody = {
  username: string;
  email: string;
  captcha: string;
};
export async function POST(req: NextRequest) {
  const body: NextBody = await req.json();

  const captchaResult = await VerifyCaptcha(body.captcha);

  if (!captchaResult)
    return NextResponse.json(
      { error: 'Google recaptcha error' },
      { status: 403 }
    );

  if (
    await DatabaseManager.GetInstance().UserQueries.CheckUsernameMail(
      body.username,
      body.email
    )
  ) {
    await SMTPServer.GetInstance().sendResetMail(body.email, body.username);
    return NextResponse.json({ status: true });
  }
  return NextResponse.json({ status: false });
}
